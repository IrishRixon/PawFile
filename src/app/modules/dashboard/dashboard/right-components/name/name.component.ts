import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { NameForm } from '../../../interfaces/pet-profile-details/pet-profile-details';

@Component({
  selector: 'app-name',
  standalone: false,
  
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss'
})
export class NameComponent {

  constructor(private formBuilder: FormBuilder, private updateDetailsFormsService: UpdateDetailsFormsService) {}

  name: string = ' ';
  urlRoot: string = 'http://localhost:3000/pawfile';
  visible: boolean = false;

  nameForm!: FormGroup;

  @Input() set petName(val: string) {
    this.name = val;
  }

  onSave() {
    const newData: NameForm = {
      prevName: this.name,
      newName: this.nameForm.value
    }

    this.updateDetailsFormsService.updateNameDetails(`${this.urlRoot}/dashboard/updateNameDetails`, newData)
    .subscribe({
      next: (res) => {
        this.name = res.prevName;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.nameForm = this.formBuilder.group({
      name: [`${this.name}`],
    })
  }
}
