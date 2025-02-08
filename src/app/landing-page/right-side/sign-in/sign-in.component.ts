import { Component, EventEmitter, inject, Injectable, Output } from '@angular/core';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FORMSTATE } from '../../enum/formState';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    InputGroupModule,
    InputNumberModule,
    InputGroupAddonModule,
    ButtonModule,
    RippleModule,
    PasswordModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  providers: [FormBuilder]
})
export class SignInComponent {
  constructor(
    private formBuilder: FormBuilder
  ) {}
  
  @Output() forgotFormState: EventEmitter<FORMSTATE> = new EventEmitter<FORMSTATE>();

  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  forgotFormStateEmit() {
    this.forgotFormState.emit(FORMSTATE.ForgotPassword)
  }
}
