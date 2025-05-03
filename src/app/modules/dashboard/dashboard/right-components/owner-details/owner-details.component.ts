import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-owner-details',
  standalone: false,
  
  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.scss'
})
export class OwnerDetailsComponent {
  constructor(private formBuilder: FormBuilder, private SSService: SharedServiceService) {}

  ownerDetailsForm!: FormGroup;
  ownerName!: string;
  
  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe(val => {
      this.ownerName = `${val.ownerDetails.firstname} ${val.ownerDetails.lastname}`;
      this.ownerDetailsForm = this.formBuilder.group({
        phoneNumber: [`${val.ownerDetails.phoneNumber}`],
        email: [`${val.ownerDetails.email}`],
        address: [`${val.ownerDetails.address}`]
      })
    })
  }
}
