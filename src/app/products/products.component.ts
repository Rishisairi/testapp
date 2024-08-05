// import { Component, OnInit } from '@angular/core';
// import { ShopService } from '../shop.service';
// import { product } from '../app.component';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss',
// })
// export class ProductsComponent implements OnInit {
//   products: product[] = [];
//   constructor(private shopservice: ShopService) {}
//   ngOnInit(): void {
//     this.shopservice.getproducts().then((data: any) => {
//       this.products = data;
//     });
//   }
// }
import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { product } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: product[] = [];

  constructor(private shopservice: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.shopservice.getproducts().then((data: any) => {
      this.products = data;
    });
  }

  goToDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
