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
import { ApiService } from '../../../services/api-service.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

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
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  providers: [FormBuilder]
})
export class SignInComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}
  
  @Output() forgotFormState: EventEmitter<FORMSTATE> = new EventEmitter<FORMSTATE>();

  urlRoot: string = "http://localhost:3000/pawfile";
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

  onSubmit() {
    this.authenticationService.signIn(`${this.urlRoot}/signin`, this.signInForm.value)
    .subscribe( res => {
      console.log(res);
    })
  }
}
