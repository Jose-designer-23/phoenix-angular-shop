import { AfterViewInit, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



@Component({
  selector: 'product-carousel',
  imports: [ProductImagePipe],
  templateUrl: './product-carousel.component.html',
  styles: `
  .swiper {
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 12px;


      height: 650px;
      max-height: 650px;
    }


    @media (max-width: 767px) {
        img {
            height: 320px;
        }
        .swiper-pagination-bullets {
            margin-top: 15px;
        }
    }

    .swiper-pagination {
        position: relative;
        margin-top: 20px;
    }
  `
})
export class ProductCarouselComponent implements AfterViewInit, OnChanges {

    images = input.required<string[]>();

    swiperDiv = viewChild.required<ElementRef>('swiperDiv');

    swiper: Swiper | undefined = undefined;

    ngOnChanges(changes: SimpleChanges): void {
      if(changes["images"].firstChange){
        return;
      }

      if (!this.swiper) return;

      this.swiper.destroy(true, true);
      const paginationEl: HTMLDivElement =
        this.swiperDiv().nativeElement?.querySelector('.swiper-pagination');

      paginationEl.innerHTML = '';

      setTimeout(() => {
        this.swiperInit();
      }, 100);

    }

    ngAfterViewInit(): void {
      this.swiperInit();
    }



      swiperInit() {
        const element = this.swiperDiv().nativeElement;
        if (!element) return;

          this.swiper = new Swiper( element, {

            direction: 'horizontal',
            loop: true,

            modules:[
              Navigation, Pagination
            ],


            pagination: {
              el: '.swiper-pagination',
            },


            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },


            scrollbar: {
              el: '.swiper-scrollbar',
            },
        });
      }




  }
