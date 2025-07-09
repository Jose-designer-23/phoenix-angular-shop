import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { RouterLink } from '@angular/router';
import { ProductImagePipe } from "../../../products/pipes/product-image.pipe";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, RouterLink, ProductImagePipe, TranslateModule],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {

  cartService = inject(CartService);
  cartItems = this.cartService.cartItems;
  public translate = inject(TranslateService);



  removeFromCart(itemId: string, itemSize: string) {
    this.cartService.removeFromCart(itemId, itemSize);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  get totalItems(): number {
    return this.cartService.getCartTotalItems();
  }

  get totalPrice(): number {
    return this.cartService.getCartTotalPrice();
  }
}
