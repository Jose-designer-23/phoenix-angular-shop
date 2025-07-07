import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { RouterLink } from '@angular/router';
import { ProductImagePipe } from "../../../products/pipes/product-image.pipe";

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, RouterLink, ProductImagePipe],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {

  cartService = inject(CartService);
  cartItems = this.cartService.cartItems;


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
