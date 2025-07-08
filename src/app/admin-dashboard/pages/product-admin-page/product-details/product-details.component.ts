import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';
import { Product } from '@products/interfaces/product.interface';
import { FormUtils } from '@utils/form-utils';
import { CommonModule } from '@angular/common';
import { FormErrorLabelComponent } from '@shared/components/form-error-label/form-error-label.component';
import { ProductsService } from '../../../../products/services/products.service';
import { Router } from '@angular/router';
import { firstValueFrom, forkJoin, map, Observable, of, tap } from 'rxjs';
import { ThemeService } from 'src/app/themeDark.service';

// const baseUrl = 'http://localhost:3000/api';

@Component({
  selector: 'product-details',
  imports: [ProductCarouselComponent, ReactiveFormsModule, CommonModule, FormErrorLabelComponent],
  templateUrl: './product-details.component.html',
  styleUrl: "product-details.component.css",
})



export class ProductDetailsComponent implements OnInit {
    product = input.required<Product>();
    productsService = inject(ProductsService);
    wasSaved = signal(false);
    router = inject(Router);
    tempImages = signal<string[]>([]);
    imageFileList: FileList|undefined = undefined;
    http = inject(HttpClient);
    themeService = inject(ThemeService);

    fb = inject(FormBuilder);

    imagesToCarousel = computed(() => {
      const currentProductImages = [
          ...this.product().images,
          ...this.tempImages(),
        ];
        return currentProductImages;
    });

    productForm = this.fb.group({

      title: ["", Validators.required],
      description: ["", Validators.required],
      slug: ["", [Validators.required, Validators.pattern(FormUtils.slugPattern)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      sizes: [[] as string[]],
      images: [[]],
      tags: [""],
      gender: ["men", [Validators.required, Validators.pattern(/men|women|kid|unisex/)]],

    });

    sizesWithColors = [
      { size: "XS", colorClass: "bg-red-500", selectedColorClass: "bg-red-700" },
      { size: "S", colorClass: "bg-green-500", selectedColorClass: "bg-green-700" },
      { size: "M", colorClass: "bg-yellow-500", selectedColorClass: "bg-yellow-700" },
      { size: "L", colorClass: "bg-purple-500", selectedColorClass: "bg-purple-700" },
      { size: "XL", colorClass: "bg-pink-500", selectedColorClass: "bg-pink-700" },
      { size: "XXL", colorClass: "bg-indigo-500", selectedColorClass: "bg-indigo-700" },
   ];

    ngOnInit(): void {
      this.setFormValue(this.product());
    }

    setFormValue(formLike: Partial<Product>){
      this.productForm.reset(this.product() as any);
      this.productForm.patchValue({tags: formLike.tags?.join(",")});

    }


    // sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    onSizeClicked(size: string) {
      const currentSizes = this.productForm.value.sizes ?? [];
      const sizeIndex = currentSizes.indexOf(size);

      if (sizeIndex > -1) {
        currentSizes.splice(sizeIndex, 1);
      } else {
        currentSizes.push(size);
      }


      this.productForm.patchValue({ sizes: [...currentSizes] });
  }

    async onSubmit() {
      const isValid = this.productForm.valid;
      this.productForm.markAllAsTouched();
      if(!isValid) return;

      const formValue = this.productForm.value;

      const productLike: Partial<Product> = {
        ...(formValue as any),
        tags:
          formValue.tags
            ?.toLowerCase()
            .split(',')
            .map((tag: string) => tag.trim()) ?? [],
      };

      console.log({ productLike });

        if (this.product().id === 'new') {
        // Crear producto
          const product = await firstValueFrom(
            this.productsService.createProduct(productLike, this.imageFileList)
          );

          this.router.navigate(['/admin/products', product.id]);
        } else {
          await firstValueFrom(
            this.productsService.updateProduct(this.product().id, productLike, this.imageFileList)
          );
        }

      this.wasSaved.set(true);
      setTimeout(() => {
        this.wasSaved.set(false);
      }, 2000);

    }

      onFilesChanged(event: Event) {
        const fileList = (event.target as HTMLInputElement).files;
        this.imageFileList = fileList ?? undefined;

        const imageUrls = Array.from(fileList ?? []).map((file) =>
          URL.createObjectURL(file)
        );

        this.tempImages.set(imageUrls)
      }




}
