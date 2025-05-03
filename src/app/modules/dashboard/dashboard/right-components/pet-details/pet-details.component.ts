import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-pet-details',
  standalone: false,
  
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  constructor(private formBuilder: FormBuilder, private SSService: SharedServiceService) {}

  petDetailsForm!: FormGroup;

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe(val => {
      this.petDetailsForm = this.formBuilder.group({
        species: [`${val.petDetails.species}`],
        breed: [`${val.petDetails.breed}`],
        age: [`${val.petDetails.age}`],
        color: [`${val.petDetails.color}`],
        gender: [`${val.petDetails.gender}`],
        temperament: [`${val.petDetails.temperament}`]
      })
    });
  }
}
