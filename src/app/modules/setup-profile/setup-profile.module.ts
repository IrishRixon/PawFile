import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupProfileRoutingModule } from './setup-profile-routing.module';
import { SetupComponent } from './setup/setup.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ProfileComponent } from './setup/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel'


@NgModule({
  declarations: [
    SetupComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SetupProfileRoutingModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule 
  ]
})
export class SetupProfileModule { }
