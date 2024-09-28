import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount = new BehaviorSubject<number>(0);  // Initial cart count
  currentCount = this.cartCount.asObservable();

  constructor() {}

  addToCart() {
    this.cartCount.next(this.cartCount.value + 1);  // Increment cart count
  }

  removeFromCart() {
    if (this.cartCount.value > 0) {
      this.cartCount.next(this.cartCount.value - 1);  // Decrement cart count
    }
  }
}

