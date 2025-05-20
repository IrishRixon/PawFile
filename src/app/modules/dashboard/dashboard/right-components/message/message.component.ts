import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { MessageDetailsForm } from '../../../interfaces/pet-profile-details/pet-profile-details';

@Component({
  selector: 'app-message',
  standalone: false,

  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private SSService: SharedServiceService,
    private updateDetailsForm: UpdateDetailsFormsService
  ) {}

  message!: FormGroup;

  visible: boolean = false;

  petName!: string;
  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';

  onSave() {
    const messageForm: MessageDetailsForm = {...this.message.value, name: this.petName};
    this.updateDetailsForm.updateMessageDetails(`${this.urlRoot}/dashboard/updateMessageDetails`, messageForm)
    .subscribe({
      next: (res) => {
        this.message.patchValue(res);
      },
      error: (err) => {
        console.error(err);
      },  
    });
  }

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe((val) => {
      this.petName = val.petDetails.name;
      this.message = this.formBuilder.group({
        message: `${val.petDetails.message}`,
      });
    });
  }
}
