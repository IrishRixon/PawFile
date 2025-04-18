import { Component } from '@angular/core';
import { GetPetsCardService } from '../services/get-petscard/get-petscard.service';
import { PetCards } from '../interfaces/petcards/petcard';
import { GetPetDetailsService } from '../services/get-pet-details/get-pet-details.service';
import { PetProfileDetails } from '../interfaces/pet-profile-details/pet-profile-details';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private getPetsCardAPI: GetPetsCardService, private getPetDetailsAPI: GetPetDetailsService) {}

  urlRoot: string = 'http://localhost:3000/pawfile';

  petsCard: PetCards = {
    petsCard: []
  };

  petProfileDetails!: PetProfileDetails

  onPetSelected(name: string) {
    console.log(name, 'name');
    this.getPetDetailsAPI.getPetDetails(`${this.urlRoot}/dashboard/getPetProfileDetails/${name}`)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.petProfileDetails = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getPetsCardAPI.getPetsCard(`${this.urlRoot}/dashboard/getPetsCard`)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.petsCard = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
