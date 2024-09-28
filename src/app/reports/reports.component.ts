import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  loginData = {
    username: 'USER',
    password: 'password'
  };

  constructor() {}

  onLogin() {
    // You can add logic here to authenticate users
    // For demo purposes, just log the login data
    if (this.loginData.username && this.loginData.password) {
      alert('Login successful');
      console.log('Login Data:', this.loginData);
    } else {
      alert('Please enter valid credentials');
    }
  }
}
