import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductCardComponent } from "../../../products/components/product-card/product-card.component";
import { HomePageComponent } from '../home-page/home-page.component';
import { ProductsService } from '@products/services/products.service';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, HomePageComponent, PaginationComponent, CommonModule, TranslateModule],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  route = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);
  private scroller = inject(ViewportScroller);
  public translate = inject(TranslateService);

  gender = toSignal(this.route.params.pipe(map(({gender}) => gender)));


  productsResource = rxResource({
    request: () => ({
        gender: this.gender(),
        page: this.paginationService.currentPage() - 1
      }
    ),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        gender: request.gender,
        offset: request.page * 9,
      });
    },
  });

  constructor() {
    effect(() => {
      this.paginationService.currentPage();
      this.gender();
      this.scroller.scrollToPosition([0, 0]);
    });
  }

}
