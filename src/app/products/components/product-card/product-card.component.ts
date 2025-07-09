import { SlicePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import {ProductImagePipe} from "@products/pipes/product-image.pipe";
import { ProductsService } from '@products/services/products.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe, TranslateModule],
  templateUrl: './product-card.component.html',
  // styleUrl: "./product-card.component.css",


})
export class ProductCardComponent {
  product = input.required<Product>();

  productsService = inject(ProductsService);

  public translate = inject(TranslateService);

    translatedTitle = computed(() => {
    const slug = this.product().slug;
    const translatedData = this.translate.instant(slug);

    if (typeof translatedData === 'object' && translatedData !== null) {
      return translatedData.title || this.product().title;
    }

    return this.product().title;

  });


  translatedDescription = computed(() => {
    const slug = this.product().slug;
    const translatedData = this.translate.instant(slug);
    if (typeof translatedData === 'object' && translatedData !== null) {
      return translatedData.description || this.product().description;
    }
    return this.product().description;
  });




}
