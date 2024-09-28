import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanjay-diagnostics';

  faShoppingCart = faShoppingCart;
  cartItemCount: number = 0;
  cart: any[] = []; // To store cart items
  totalTests: number = 0; // Track the total number of tests
  totalPrice: number = 0; // Track the total price of all tests

  // Method to add items to cart
  addToCart(test: any) {
    const existingTest = this.cart.find(item => item.id === test.id);

    if (!existingTest) {
      this.cart.push(test);
      this.cartItemCount = this.cart.length;
      this.totalTests++; // Increment test count
      this.totalPrice += test.price; // Increment total price
      alert(`${test.name} added to the cart!`);
    }
  }

  // Method to remove items from the cart
  removeFromCart(index: number) {
    const removedItem = this.cart[index];
    this.cart.splice(index, 1);
    this.cartItemCount = this.cart.length;

    // Update test count and total price when an item is removed
    this.totalTests--;
    this.totalPrice -= removedItem.price;
    alert(`${removedItem.name} removed from the cart!`);
  }

  // Method to handle checkout process (dummy method)
  proceedToCheckout() {
    alert('Proceeding to checkout with ' + this.totalTests + ' items totaling ₹' + this.totalPrice);
    // Implement checkout functionality here
  }


}

