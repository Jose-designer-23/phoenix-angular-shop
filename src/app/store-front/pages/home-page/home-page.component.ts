import { ViewportScroller } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { map } from 'rxjs';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent,TranslateModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);
  private scroller = inject(ViewportScroller);
  public translate = inject(TranslateService);


  productsResource = rxResource({
    request: () => ({ page: this.paginationService.currentPage() - 1}),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        offset: request.page * 9,
      });
    },
  });

   constructor() {
      effect(() => {
        this.paginationService.currentPage();
        this.scroller.scrollToPosition([0, 0]);
      });
  }

  ngOnInit(): void {

    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();

    this.translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'es');
  }


  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }



}
