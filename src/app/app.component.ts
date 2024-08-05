import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterLink } from '@angular/router';
export interface product {
  id: number;
  name: string;
  price: string;
  image: string;
}
const routes: Routes = [
  { path: 'product/:id', component: ProductdetailsComponent },
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testapp';
}
