import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medical-details',
  standalone: false,
  
  templateUrl: './medical-details.component.html',
  styleUrl: './medical-details.component.scss'
})
export class MedicalDetailsComponent {
  constructor(private formBuilder: FormBuilder) {}

  medicalDetailsForm!: FormGroup

  ngOnInit(): void {
    this.medicalDetailsForm = this.formBuilder.group({
      vetClinicName: [''],
      vetClinicPhoneNumber: [''],
      vaccinations: [''],
      allergies: [''],
      medications: ['']
    })
  }
}
