import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { MedicalDetailsForm } from '../../../interfaces/pet-profile-details/pet-profile-details';

@Component({
  selector: 'app-medical-details',
  standalone: false,

  templateUrl: './medical-details.component.html',
  styleUrl: './medical-details.component.scss',
})
export class MedicalDetailsComponent {
  constructor(
    private formBuilder: FormBuilder,
    private SSService: SharedServiceService,
    private updateDetailsForm: UpdateDetailsFormsService
  ) {}

  petName!: string;

  medicalDetailsForm!: FormGroup;

  visible: boolean = false;

  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';

  onSave() {
    const medicalDetails: MedicalDetailsForm = {...this.medicalDetailsForm.value /*, name: this.petName */ };

    this.updateDetailsForm.updateMedicalDetails(`${this.urlRoot}/dashboard/updateMedicalDetailsForm`, medicalDetails)
    .subscribe({
      next: (res) => {
        this.medicalDetailsForm.patchValue(res);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe((val) => {
      this.petName = val.petDetails.name;

      this.medicalDetailsForm = this.formBuilder.group({
        vetClinicName: [`${val.medicalDetails.vetClinicName}`],
        vetClinicPhoneNumber: [`${val.medicalDetails.vetClinicPhoneNumber}`],
        vaccination: [`${val.medicalDetails.vaccination}`],
        allergies: [`${val.medicalDetails.allergies}`],
        medications: [`${val.medicalDetails.medications}`],
      });
    });
  }
}
