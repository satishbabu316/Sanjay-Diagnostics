import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Save contact data to local storage
    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    existingContacts.push(this.contactData);
    localStorage.setItem('contacts', JSON.stringify(existingContacts));

    alert(`Thank you for contacting us, ${this.contactData.name}!`);
    console.log('Contact Data:', this.contactData);
    
    // Reset the form after submission
    this.contactData = {
        name: '',
        email: '',
        message: ''
    };
}
}
