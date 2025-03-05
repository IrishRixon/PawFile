import { Component } from '@angular/core';
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

  ngOnInit(): void {
    this.petForm = this.formBuilder.group({
      name: [''],
      species: [''],
      breed: [''],
      age: [],
      color: [''],
      temperament: [''],
    });

    this.petForm.patchValue(this.formValHolder.petForm);
  }

  ngOnDestroy(): void {
    this.formValHolder.setPetForm(this.petForm.value);
  }
}
