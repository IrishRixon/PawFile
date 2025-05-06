import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';

@Component({
  selector: 'app-pet-details',
  standalone: false,
  
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  constructor(private formBuilder: FormBuilder, private SSService: SharedServiceService,
    private updateDetailsForm: UpdateDetailsFormsService
  ) {}

  petDetailsForm!: FormGroup;
  visible: boolean = false;
  value3: string = "";
  gender!: string;
  urlRoot: string = 'http://localhost:3000/pawfile';
  showDialog() {
    this.visible = true;
  }

  onSave() {
    this.updateDetailsForm.updatePetDetails(`${this.urlRoot}/dashboard/updatePetDetails`, this.petDetailsForm.value)
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe(val => {
      this.gender = val.petDetails.gender;

      this.petDetailsForm = this.formBuilder.group({
        species: [`${val.petDetails.species}`],
        breed: [`${val.petDetails.breed}`],
        age: [`${val.petDetails.age}`],
        color: [`${val.petDetails.color}`],
        gender: [`${this.gender}`],
        temperament: [`${val.petDetails.temperament}`]
      })
    });
  }
}
