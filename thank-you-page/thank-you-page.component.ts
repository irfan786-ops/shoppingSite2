import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thank-you-page.component.html',
  styleUrl: './thank-you-page.component.css'
})
export class ThankYouPageComponent {
  orderPlaced: boolean = false;
 constructor(public router:Router){}

}
