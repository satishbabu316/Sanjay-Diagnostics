import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tests = [
    { id: 1, name: 'Test A', price: 1000, booked: false },
    { id: 2, name: 'Test B', price: 2000, booked: false },
    { id: 3, name: 'Test C', price: 1500, booked: false },
    { id: 4, name: 'Test D', price: 2500, booked: false }
  ];

  constructor(private appComponent: AppComponent) {}

  toggleBooking(testId: number) {
    const test = this.tests.find(t => t.id === testId);
    if (test) {
      test.booked = !test.booked;
      if (test.booked) {
        this.appComponent.addToCart(test); // Add to cart
      } else {
        const index = this.appComponent.cart.findIndex(t => t.id === testId);
        if (index > -1) {
          this.appComponent.removeFromCart(index); // Remove from cart
        }
      }
    }
  }
   // Store login data
  loginData = {
    username: '',
    password: ''
  };

  
  

}

