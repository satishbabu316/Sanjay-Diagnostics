import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      name: 'Blood Testing',
      items: ['Complete Blood Count (CBC)', 'Blood Chemistry Panel', 'Liver Function Test (LFT)', 'Lipid Profile', 'Glucose Test']
    },
    {
      name: 'Urine Testing',
      items: ['Urinalysis', 'Urine Culture', 'Pregnancy Test', 'Microalbumin Test']
    },
    {
      name: 'Immunology Testing',
      items: ['Antibody Testing', 'Allergy Testing', 'Rheumatoid Factor (RF) Test']
    },
    {
      name: 'Microbiology Testing',
      items: ['Blood Culture', 'Throat Culture', 'Sputum Culture', 'Stool Culture']
    },
    {
      name: 'Pathology',
      items: ['Tissue Biopsy', 'FNAC', 'Pap Smear']
    },
    {
      name: 'Radiology Services(Refer)',
      items: ['X-ray', 'Ultrasound', 'MRI', 'CT Scan']
    },
    // Add more services as needed
  ];

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']); // Route to the home page
  }
}
