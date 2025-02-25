import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetUpProfileComponent } from './set-up-profile/set-up-profile.component';

const routes: Routes = [
  {
    path: '',
    component: SetUpProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetUpProfileRoutingModule { }
