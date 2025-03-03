import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserForm } from '../../interface/forms';
import { FormsValueHolderService } from '../services/forms-value-holder.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private formBuilder: FormBuilder,
    private formValHolder: FormsValueHolderService
  ) {}
  
  @Output() form: EventEmitter<UserForm> = new EventEmitter<UserForm>;

  profileForm!: FormGroup;
  
  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phone: [''],
      address: this.formBuilder.group({
        street: [''],
        barangay: [''],
        municipality: [''],
        province: ['']
      })
    })

    if(this.formValHolder.userForm) {
      this.profileForm.patchValue(this.formValHolder.userForm)
    }
  }
  
  ngOnDestroy(): void {
    this.form.emit(this.profileForm.value);
  }
}
