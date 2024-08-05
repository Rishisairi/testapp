import { Injectable } from '@angular/core';
import { product } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  getproducts(): Promise<product> {
    return fetch(`https://66afb9eeb05db47acc5aa017.mockapi.io/products`).then(
      (res) => res.json()
    );
  }

  constructor() {}
}
