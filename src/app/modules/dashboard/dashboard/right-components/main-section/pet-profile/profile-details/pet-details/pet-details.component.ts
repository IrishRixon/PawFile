import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pet-details',
  standalone: false,
  
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  constructor(private formBuilder: FormBuilder) {}

  petDetailsForm!: FormGroup;

  ngOnInit(): void {
    this.petDetailsForm = this.formBuilder.group({
      species: ['dog'],
      breed: [''],
      age: [''],
      color: [''],
      gender: [''],
      temperament: ['']
    })
  }
}
