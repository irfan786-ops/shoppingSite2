import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent {
  checkoutForm: FormGroup;
  orderPlaced: boolean = false;
 

  constructor(private fb: FormBuilder, public router:Router) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
 
  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.orderPlaced = true;
      alert('Order Placed');
      
      // Reset the form after submission
      this.checkoutForm.reset();
    }
  
  }
  onBack(){
    this.router.navigate(['/productList'])
  }
  onThankYouPage(){
    alert('Order Placed');
    this.router.navigate(['/thankYpuPage'])
  }
}
