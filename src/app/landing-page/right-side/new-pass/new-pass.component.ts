import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-new-pass',
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-pass.component.html',
  styleUrl: './new-pass.component.scss'
})
export class NewPassComponent {
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {}

  @ViewChild('newPass') newPass!: ElementRef;

  newPassForm!: FormGroup;

  ngOnInit() {
    this.newPassForm = this.formBuilder.group({
      old: ['', [Validators.required, Validators.minLength(8)]],
      new: ['', [Validators.required,  Validators.minLength(8)]]
    });
  }
}
