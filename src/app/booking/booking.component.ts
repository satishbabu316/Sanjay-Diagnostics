import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  tests = [
    { id: 1, name: 'Test A', price: 1000, booked: false },
    { id: 2, name: 'Test B', price: 2000, booked: false },
    { id: 3, name: 'Test C', price: 1500, booked: false },
    { id: 4, name: 'Test D', price: 2500, booked: false },
    { id: 5, name: 'Test E', price: 1000, booked: false },
    { id: 6, name: 'Test F', price: 2000, booked: false },
    { id: 7, name: 'Test G', price: 1500, booked: false },
    { id: 8, name: 'Test H', price: 2500, booked: false },
    { id: 9, name: 'Test I', price: 1000, booked: false },
    { id: 10, name: 'Test J', price: 2000, booked: false },
    { id: 11, name: 'Test K', price: 1500, booked: false },
    { id: 12, name: 'Test L', price: 2500, booked: false }
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
}


