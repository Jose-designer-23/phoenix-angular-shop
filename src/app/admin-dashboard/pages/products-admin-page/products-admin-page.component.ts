import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductTableComponent } from '@products/components/product-table/product-table.component';
import { ProductsService } from '@products/services/products.service';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../themeDark.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTableComponent, PaginationComponent, RouterLink, CommonModule, TranslateModule],
  templateUrl: './products-admin-page.component.html',
})
export class ProductsAdminPageComponent {

    productsService = inject(ProductsService);
    paginationService = inject(PaginationService);
    themeService = inject(ThemeService);
    public translate = inject(TranslateService);

    productsPerPage = signal(10);


    productsResource = rxResource({
      request: () => ({
        page: this.paginationService.currentPage() - 1,
        limit: this.productsPerPage(),

      }),
      loader: ({ request }) => {
        return this.productsService.getProducts({
          offset: request.page * 9,
          limit: request.limit,
        });
      },
    });



 }
