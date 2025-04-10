import { Component, EventEmitter, Output } from '@angular/core';
import { FormsValueHolderService } from '../services/forms-value-holder.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss',
  standalone: false,
})
export class PetComponent {
  constructor(
    private formValHolder: FormsValueHolderService,
    private formBuilder: FormBuilder
  ) {}
  
  petForm!: FormGroup;
  ingredient!: string;

  emitFileSelected(event: any) {
    this.formValHolder.petProfileImage = event.currentFiles[0];
  }

  ngOnInit(): void {
    this.petForm = this.formBuilder.group({
      name: [''],
      species: [''],
      breed: [''],
      age: [],
      color: [''],
      temperament: [''],
      gender: [''],
    });

    this.petForm.patchValue(this.formValHolder.petForm);
  }

  ngOnDestroy(): void {
    this.formValHolder.setPetForm(this.petForm.value);
  }
}
