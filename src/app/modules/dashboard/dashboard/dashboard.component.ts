import { Component } from '@angular/core';
import { GetPetsCardService } from '../services/get-petscard/get-petscard.service';
import { PetCards } from '../interfaces/petcards/petcard';
import { GetPetDetailsService } from '../services/get-pet-details/get-pet-details.service';
import { PetProfileDetails } from '../interfaces/pet-profile-details/pet-profile-details';
import { SharedServiceService } from '../services/shared-service/shared-service.service';
import { SpeeddialItem } from '../interfaces/speeddial/speeddial';
import { SpeeddialItemsService } from '../services/speeddial-items/speeddial-items.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    private getPetsCardAPI: GetPetsCardService,
    private getPetDetailsAPI: GetPetDetailsService,
    private SSService: SharedServiceService,
    private SpeedDialItemsService: SpeeddialItemsService
  ) { }

  isThereSelectedPet: boolean = false; 
  urlRoot: string = 'http://localhost:3000/pawfile';

  petsCard: PetCards = {
    petsCard: [],
  };

  speedDialItems!: SpeeddialItem[];

  petProfileDetails: PetProfileDetails = {
    petDetails: {
      owner: '',
      message: '',
      name: 'n',
      species: '',
      breed: '',
      age: 0,
      color: '',
      temperament: '',
      gender: '',
      profilePic: '',
      images: [],
    },
    ownerDetails: {
      profilePic: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      email: '',
      address: {
        street: '',
        barangay: '',
        municipality: '',
        province: '',
      },
    },
    medicalDetails: {
      vetClinicName: '',
      vetClinicPhoneNumber: '',
      vaccination: '',
      allergies: '',
      medications: '',
    },
  };

  onPetSelected(name: string) {
    this.getPetDetailsAPI
      .getPetDetails(`${this.urlRoot}/dashboard/getPetProfileDetails/${name}`)
      .subscribe({
        next: (res) => {
          this.isThereSelectedPet = true;
          this.petProfileDetails = res;
          console.log(res, 'name');
          this.SSService.setPetProfileDetails(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnInit(): void {
    this.speedDialItems = this.SpeedDialItemsService.getItems();
    
    this.getPetsCardAPI
      .getPetsCard(`${this.urlRoot}/dashboard/getPetsCard`)
      .subscribe({
        next: (res) => {
          console.log(res, 'getting pets cards');
          this.petsCard = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
