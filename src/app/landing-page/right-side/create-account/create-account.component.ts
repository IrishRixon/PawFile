import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-create-account',
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
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ){}

  createAccountForm!: FormGroup;

  @ViewChild('errormsg') errormsg!: ElementRef;
  @ViewChild('confirmInput') confirmInput!: ElementRef;

  confirmPassValue: string = '';
  isPasswordMatched: boolean = false;
  isBtnEnable!: boolean;

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',  [Validators.required, Validators.minLength(8)]],
    })

    this.isBtnEnable = this.createAccountForm.valid && this.isPasswordMatched;
  }

  checkIfPasswordMatch() {
    this.isPasswordMatched = this.createAccountForm.get('password')?.value === this.confirmPassValue;
    this.isBtnEnable = this.createAccountForm.valid && this.isPasswordMatched;

    if(!this.isPasswordMatched) {
      console.log(this.confirmInput.nativeElement.classList.contains('ng-touched'));
      
      if(this.confirmInput.nativeElement.classList.contains('ng-touched')) {
        this.renderer.addClass(this.errormsg.nativeElement, 'open')
      }
      this.renderer.addClass(this.confirmInput.nativeElement, 'dirty')
    }
    else {
      this.renderer.removeClass(this.errormsg.nativeElement, 'open')
      this.renderer.removeClass(this.confirmInput.nativeElement, 'dirty')
    }
  }
}
