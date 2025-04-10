import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-owner-details',
  standalone: false,
  
  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.scss'
})
export class OwnerDetailsComponent {
  constructor(private formBuilder: FormBuilder) {}

  ownerDetailsForm!: FormGroup;
  
  ngOnInit(): void {
    this.ownerDetailsForm = this.formBuilder.group({
      phoneNumber: [''],
      email: [''],
      address: ['']
    })
  }
}
