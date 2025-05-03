import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-medical-details',
  standalone: false,
  
  templateUrl: './medical-details.component.html',
  styleUrl: './medical-details.component.scss'
})
export class MedicalDetailsComponent {
  constructor(private formBuilder: FormBuilder, private SSService: SharedServiceService) {}

  medicalDetailsForm!: FormGroup

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe(val => {
      this.medicalDetailsForm = this.formBuilder.group({
        vetClinicName: [`${val.medicalDetails.vetClinicName}`],
        vetClinicPhoneNumber: [`${val.medicalDetails.vetClinicPhoneNumber}`],
        vaccinations: [`${val.medicalDetails.vaccination}`],
        allergies: [`${val.medicalDetails.allergies}`],
        medications: [`${val.medicalDetails.medications}`]
      })
    })
  }
}
