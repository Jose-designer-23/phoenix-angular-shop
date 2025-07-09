import { CurrencyPipe, CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'product-table',
  imports: [ProductImagePipe, RouterLink, CurrencyPipe, CommonModule, TranslateModule],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {

  products = input.required<Product[]>();
  public translate = inject(TranslateService);

   getTranslatedTitle(product: Product): string {

    const productTranslations = this.translate.instant(product.slug);


    if (typeof productTranslations === 'object' && productTranslations !== null) {
      return productTranslations.title || product.title;
    }


    return product.title;
  }

 }
