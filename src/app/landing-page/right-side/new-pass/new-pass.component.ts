import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { NewPass, UserEmail } from '../../../interfaces/authentication';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

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
    private authenticationService: AuthenticationService
  ) {}

  @ViewChild('newPass') newPass!: ElementRef;

  @Input() email!: UserEmail;

  newPassForm!: FormGroup;
  
  urlRoot: string = "http://localhost:3000/pawfile";

  onSubmit() {
    const { oldPass, newPass } = this.newPassForm.value;
    
    const values: NewPass = {
      email: this.email.email,
      oldPass: oldPass,
      newPass: newPass
    };

    this.authenticationService.changePass(this.urlRoot, values)
    .subscribe((res) => {
      console.log(res.res?.isSuccess);      
    })
  }

  ngOnInit() {
    this.newPassForm = this.formBuilder.group({
      oldPass: ['', [Validators.required, Validators.minLength(8)]],
      newPass: ['', [Validators.required,  Validators.minLength(8)]]
    });
  }
}
