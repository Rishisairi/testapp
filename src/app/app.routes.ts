import { Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: 'book/:id',
    component: ProductdetailsComponent,
  },
];
