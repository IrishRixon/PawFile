import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetPetsCardService } from '../services/get-petscard/get-petscard.service';
import { PetCards } from '../interfaces/petcards/petcard';
import { GetPetDetailsService } from '../services/get-pet-details/get-pet-details.service';
import { PetProfileDetails } from '../interfaces/pet-profile-details/pet-profile-details';
import { SharedServiceService } from '../services/shared-service/shared-service.service';
import { SpeeddialItem } from '../interfaces/speeddial/speeddial';
import { SpeeddialItemsService } from '../services/speeddial-items/speeddial-items.service';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
    private speedDialItemsService: SpeeddialItemsService,
    private activatedRoute: ActivatedRoute
  ) { }

  petQRCode: string = '';
  qrCodeDownloadLink!: SafeUrl;
  isThereSelectedPet: boolean = false;
  visible: boolean = false;
  urlRoot: string = 'http://localhost:3000/pawfile';

  petsCard: PetCards = {
    petsCard: [],
  };

  speedDialItems!: SpeeddialItem[];

  petProfileDetails: PetProfileDetails = {
    petDetails: {
      _id: '',
      owner: '',
      message: '',
      name: '',
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

  onPetSelected(id: string) {
    console.log(id);
    
    this.getPetDetailsAPI
      .getPetDetails(`${this.urlRoot}/dashboard/getPetProfileDetails/${id}`)
      .subscribe({
        next: (res) => {
          this.isThereSelectedPet = true;
          this.petProfileDetails = res;
          this.SSService.setPetProfileDetails(res);
          this.petQRCode = `http://localhost:4200/dashboard/${res.petDetails._id}`
          console.log(this.petQRCode, 'petQRCode');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  getIdUrlParams() {
    const idUrlParams = this.activatedRoute.snapshot.paramMap.get('id');

    // if(!idUrlParams) {
    //   this.getPetDetailsAPI.getPetDetails(`${this.urlRoot}/dashboard/getPetProfileDetails/${}`)
    // }
  }

  ngOnInit(): void {
    this.getIdUrlParams();
    
    this.speedDialItems = this.speedDialItemsService.getItems();

    this.speedDialItemsService.toggleDialogObs.subscribe( val => {
      this.visible = val;
    })

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
