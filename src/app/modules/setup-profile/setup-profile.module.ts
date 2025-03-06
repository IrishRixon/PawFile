import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupProfileRoutingModule } from './setup-profile-routing.module';
import { SetupComponent } from './setup/setup.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ProfileComponent } from './setup/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { PetComponent } from './setup/pet/pet.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProceedComponent } from './setup/proceed/proceed.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    SetupComponent,
    ProfileComponent,
    PetComponent,
    ProceedComponent
  ],
  imports: [
    CommonModule,
    SetupProfileRoutingModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputMaskModule,
    FileUploadModule,
    InputNumberModule,
    ProgressBarModule,
    ProgressSpinnerModule
]
})
export class SetupProfileModule { }
