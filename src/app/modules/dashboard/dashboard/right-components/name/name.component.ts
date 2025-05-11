import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { NameForm } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-name',
  standalone: false,
  
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss'
})
export class NameComponent {

  constructor(private formBuilder: FormBuilder, private updateDetailsFormsService: UpdateDetailsFormsService, private SSService: SharedServiceService) {}

  @Output() newName: EventEmitter<string> = new EventEmitter<string>();

  name!: string;
  urlRoot: string = 'http://localhost:3000/pawfile';
  visible: boolean = false;

  nameForm!: FormGroup;

  onSave() {
    const newData: NameForm = {
      prevName: this.name,
      newName: this.nameForm.value
    }

    this.updateDetailsFormsService.updateNameDetails(`${this.urlRoot}/dashboard/updateNameDetails`, newData)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.name = res.newName;
        this.newName.emit(res.newName);
        this.nameForm.patchValue({ name: res.newName });
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe( val => {
      this.name = val.petDetails.name;

      this.nameForm = this.formBuilder.group({
        name: [this.name]
      });
    })
  }
}
