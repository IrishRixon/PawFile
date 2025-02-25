import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetUpProfileRoutingModule } from './set-up-profile-routing.module';
import { SetUpProfileComponent } from './set-up-profile/set-up-profile.component';


@NgModule({
  declarations: [SetUpProfileComponent],
  imports: [
    CommonModule,
    SetUpProfileRoutingModule
  ]
})
export class SetUpProfileModule { }
