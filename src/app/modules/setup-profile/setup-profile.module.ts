import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupProfileRoutingModule } from './setup-profile-routing.module';
import { SetupComponent } from './setup/setup.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    SetupProfileRoutingModule,
    StepperModule,
    ButtonModule
  ]
})
export class SetupProfileModule { }
