import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { Address, OwnerDetailsForm, PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { group } from '@angular/animations';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { GlobalVarService } from '../../../../../services/globalVar/global-var.service';

@Component({
  selector: 'app-owner-details',
  standalone: false,

  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.scss',
})
export class OwnerDetailsComponent {
  constructor(
    private formBuilder: FormBuilder,
    private SSService: SharedServiceService,
    private updateDetailsForm: UpdateDetailsFormsService,
    private globalVar: GlobalVarService
  ) {}

  ownerDetailsForm!: FormGroup;

  ownerName!: string;
  firstname!: string;
  lastname!: string;
  address!: string;
  email!: string;

  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';

  visible: boolean = false;

  onSave() {
    const ownerDetails = { ...this.ownerDetailsForm.value };

    console.log(ownerDetails);

    this.updateDetailsForm
      .updateOwnerDetails(
        `${this.urlRoot}/dashboard/updateOwnerDetails`,
        ownerDetails
      )
      .subscribe({
        next: (res) => {
          this.ownerDetailsForm.patchValue(res);
          this.address =
            res.address.street +
            ' ' +
            res.address.barangay +
            ' ' +
            res.address.municipality +
            ' ' +
            res.address.province;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    this.urlRoot = this.globalVar.urlRoot;
    
    this.SSService.petProfileDetailsObs.subscribe((val) => {
      this.address =
        val.ownerDetails.address.street +
        ' ' +
        val.ownerDetails.address.barangay +
        ' ' +
        val.ownerDetails.address.municipality +
        ' ' +
        val.ownerDetails.address.province;

      this.firstname = val.ownerDetails.firstname;
      this.lastname = val.ownerDetails.lastname;
      this.ownerName = `${this.firstname} ${this.lastname}`;
      this.email = val.ownerDetails.email;

      this.ownerDetailsForm = this.formBuilder.group({
        phoneNumber: [`${val.ownerDetails.phoneNumber}`],
        address: this.formBuilder.group({
          street: [`${val.ownerDetails.address.street}`],
          barangay: [`${val.ownerDetails.address.barangay}`],
          municipality: [`${val.ownerDetails.address.municipality}`],
          province: [`${val.ownerDetails.address.province}`],
        }),
      });
    });
  }
}
