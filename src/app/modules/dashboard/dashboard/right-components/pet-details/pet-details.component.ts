import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { PetDetailsForm } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { GlobalVarService } from '../../../../../services/globalVar/global-var.service';

@Component({
  selector: 'app-pet-details',
  standalone: false,
  
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  constructor(private formBuilder: FormBuilder, private SSService: SharedServiceService,
    private updateDetailsForm: UpdateDetailsFormsService,
    public globalVar: GlobalVarService
  ) {}

  petDetailsForm!: FormGroup;

  visible: boolean = false;

  petName!: string;
  value3: string = "";
  gender!: string;
  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';
  showDialog() {
    this.visible = true;
  }

  onSave() {
    const petDetails: PetDetailsForm = {...this.petDetailsForm.value, name: this.petName};
    
    this.updateDetailsForm.updatePetDetails(`${this.urlRoot}/dashboard/updatePetDetails`, petDetails)
    .subscribe({
      next: (res) => {
        this.petDetailsForm.patchValue(res); 
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
    this.urlRoot = this.globalVar.urlRoot;
    
    this.SSService.petProfileDetailsObs.subscribe(val => {
      this.gender = val.petDetails.gender;
      this.petName = val.petDetails.name;

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
