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
import { MessageService } from 'primeng/api';
import { ToastMessage } from '../interfaces/toast-message/toast-message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateDetailsFormsService } from '../services/update-details-forms/update-details-forms.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [MessageService]
})
export class DashboardComponent {
  constructor(
    private getPetsCardAPI: GetPetsCardService,
    private getPetDetailsAPI: GetPetDetailsService,
    private SSService: SharedServiceService,
    private speedDialItemsService: SpeeddialItemsService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private updateDetailsFormsService: UpdateDetailsFormsService
  ) {}

  petQRCode: string = '';
  qrCodeDownloadLink!: SafeUrl;

  isThereSelectedPet: boolean = false;
  visible: boolean = false;
  addDialogVisible: boolean = false;

  urlRoot: string = 'http://localhost:3000/pawfile';

  selectedPetIndex!: number;

  addPetForm!: FormGroup;

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
          this.petQRCode = `http://localhost:4200/dashboard/${res.petDetails._id}`;
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

    if (idUrlParams != null) {
      this.getPetDetailsAPI
        .getPetDetails(
          `${this.urlRoot}/dashboard/getPetProfileDetails/${idUrlParams}`
        )
        .subscribe({
          next: (res) => {
            this.isThereSelectedPet = true;
            this.petProfileDetails = res;
            this.SSService.setPetProfileDetails(res);
          },
        });
    }
  }

  setSelectedPetIndex(val: number) {
    this.selectedPetIndex = val;
    console.log(this.selectedPetIndex);
  }

  showToastMessage(toastMessage: ToastMessage) {
    this.messageService.add({
      severity: toastMessage.severity,
      summary: toastMessage.summary,
      detail: toastMessage.detail,
      life: toastMessage.life,
      sticky: (toastMessage.sticky) ? toastMessage.sticky : false,
      icon: (toastMessage.icon) ? toastMessage.icon : '',
    });
  }

  addPet() {
    this.updateDetailsFormsService.postNewPet(`${this.urlRoot}/dashboard/postNewPet`, this.addPetForm.value)
    .subscribe({
      next: (res) => {
        this.petsCard.petsCard.push(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  clearToastMessage() {
    this.messageService.clear();
  }

  closeAddDialog() {
    this.speedDialItemsService.visibleAddDialog(false);
  }

  ngOnInit(): void {
    this.getIdUrlParams();

    this.speedDialItems = this.speedDialItemsService.getItems();

    this.speedDialItemsService.toggleDialogObs.subscribe((val) => {
      this.visible = val;
    });

    this.speedDialItemsService.toggleAddDialogObs.subscribe((val) => {
      this.addDialogVisible = val;
    });

    this.addPetForm = this.formBuilder.group({
      name: ['', Validators.required],
      species: [''],
      breed: [''],
      age: [''],
      color: [''],
      temperament: [''],
      gender: ['male'],
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
