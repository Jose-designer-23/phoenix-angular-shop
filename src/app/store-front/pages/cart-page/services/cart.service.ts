import { Injectable, signal, effect, inject } from '@angular/core';
import { Router } from '@angular/router';


export interface CartItem {
  id: string;
  image: string;
  title: string;
  slug: string;
  size: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private router = inject(Router);

  cartItems = signal<CartItem[]>(this.loadCartFromLocalStorage());

  constructor() {
    effect(() => {
      const currentCart = this.cartItems();
      localStorage.setItem('cart', JSON.stringify(currentCart));
      console.log('Carrito guardado en localStorage:', currentCart);
    });
  }

  private loadCartFromLocalStorage(): CartItem[] {
    const cartData = localStorage.getItem('cart');
    try {
      return cartData ? JSON.parse(cartData) : [];
    } catch (e) {
      console.error("Error al parsear el carrito de localStorage", e);
      return [];
    }
  }

  /**
   * Añade un producto al carrito. Si ya existe, incrementa la cantidad.
   * @param product El objeto producto con sus detalles.
   * @param selectedSize La talla seleccionada por el usuario.
   */
  addToCart(product: any, selectedSize: string) {
    this.cartItems.update(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === product.id && item.size === selectedSize
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {

        const newItem: CartItem = {
          id: product.id,
          image: product.images[0],
          title: product.title,
          slug: product.slug,
          size: selectedSize,
          price: product.price,
          quantity: 1
        };
        return [...currentItems, newItem];
      }
    });


  }


  removeFromCart(itemId: string, itemSize: string) {
    this.cartItems.update(items =>
      items.filter(item => !(item.id === itemId && item.size === itemSize))
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }

  getCartTotalItems(): number {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotalPrice(): number {
    return this.cartItems().reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
