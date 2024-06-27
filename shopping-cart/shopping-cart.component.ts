import { Component ,ViewChild} from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,CheckoutFormComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: any[] = [];
  
  orderPlaced = false;
  constructor(private cartService: CartService, public router:Router) { 
   
  }

  @ViewChild(CheckoutFormComponent) checkoutForm!: CheckoutFormComponent;

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
 
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
 
  removeallCart(): void {
    this.cartService.removeallCart();
    this.cartItems = [];
    alert('Cart cleared!');
  }
  removeCart(index: number): void {
    this.cartService.removeItemFromCart(index);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items after removal
  }
  onBack(){
    this.router.navigate(['productList'])
  }

  checkoutFormDetails(){
    this.router.navigate(['/checkoutForm']);
  }
}
