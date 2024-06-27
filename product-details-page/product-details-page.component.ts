import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute , Router} from '@angular/router';
import { CartService } from '../shopping-cart/cart.service';


@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent implements OnInit {
  productId!: number;
  product: any = {};
  cartItems: never[] = [];
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productId = +  this.route.snapshot.params['id'];
    this.product = this.getProductById(this.productId);
  }

  getProductById(id: number): any{
   
    const products = [
      {
        id: 1,
        price: 5000,
        Iphone: "https://assets.sangeethamobiles.com/product_img/14511/1694715009_2Y4.jpg",
        Category: "Electronics",
        description: "Apple M2 Chip With 8-Core CPU, 10-Core GPU, 16-Core Neural Engine 8GB Unified Memory"
      },
      {
        id: 2,
        price: 2500,
        BabyCar: "https://babymoo.in/cdn/shop/files/61FLDz_Hg4L._SL1000.jpg?v=1693587762&width=800",
        Category: "Toys",
        description: "Baby Moo Mini Cooper Electric Ride-On Car For Kids"
      },
      {
        id: 3,
        price: 51000,
        HpDesktop: "https://m.media-amazon.com/images/I/71CW7r7QcpL._SX679_.jpg",
        Category: "Electronics",
        description: "(Refurbished) Dell Optiplex 3020 Desktop (Intel Core I3/8 GB RAM(Upgradable To 16GB) / 1TB HDD/ Windows 10 Pro, MS Office/USB, Ethernet,VGA,1"
      },
      {
        id: 4,
        price: 1500,
        Shoes: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012502933-Red-Red-1000012502933_01-2100.jpg",
        Category: "Shoes",
        description: "Step Into A World Of Unparalleled Athleticism With PUMA Sports Shoes. These Sports Shoes For Athletes Are An Unavoidable Companion For Every Sports Enthusiast Who Wants To Take Their Fitness To The Next Level.)"
      },
      {
        id: 5,
        price: 8000,
        Batman: "https://m.media-amazon.com/images/I/71f2CsTEVPL._SX522_.jpg",
        Category: "Toys",
        description: "Mcfarlane DC Multiverse: Arkham City - Ra's Al Ghul Action Figure (Collect To Build: Solomon Grundy)"
      },
      {
        id: 6,
        price: 8000,
        Shoes: "https://m.media-amazon.com/images/I/61khfFg6ozL._AC_SY575_.jpg",
        Category: "Shoes",
        description: "Gray Shoes"
      }
    ];
    return products.find(product => product.id === id) || {};
}

addToCart(): void {
  this.cartService.addToCart(this.product);
  alert('Product added to cart!');
}

onBack(){
  this.router.navigate(['/productList'])
}

}
