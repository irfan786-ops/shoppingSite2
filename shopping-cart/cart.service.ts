import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: any[] = [];

  addToCart(product: any): void {
    this.cart.push(product);
  }

  getCartItems(): any[] {
    return this.cart;
  }

  removeallCart(): void {
    this.cart = [];
  }

  removeItemFromCart(index: number): void {
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
