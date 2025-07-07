import { Component, inject, signal, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';
import { Product } from '../../../products/interfaces/product.interface';
import { CartService } from '../cart-page/services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent, CommonModule, FormsModule],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);
  private cartService = inject(CartService);

  productIdSlug = this.activatedRoute.snapshot.params["idSlug"];

  selectedSize = signal<string | null>(null);

  showSuccessMessage = signal(false);


  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) =>
      this.productService.getProductByIdSlug(request.idSlug),
  });

  constructor() {

    effect(() => {
      const product = this.productResource.value();

      if (product && product.sizes && product.sizes.length > 0) {
        this.selectedSize.set(product.sizes[0]);
      } else {
        this.selectedSize.set(null);
      }
    });
  }

  onAddToCart() {
    const product = this.productResource.value();
    const size = this.selectedSize();

    if (product && size) {
      this.cartService.addToCart(product, size);
      this.showSuccessMessage.set(true);

      setTimeout(() => {
        this.showSuccessMessage.set(false);
      }, 2000);
    } else {
      console.warn('No se pudo añadir al carrito: producto no cargado o talla no seleccionada.');
      alert('Por favor, selecciona una talla antes de añadir este producto a tu carrito.');
    }
  }
}
