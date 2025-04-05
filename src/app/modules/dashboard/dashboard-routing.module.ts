import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetProfileComponent } from './dashboard/right-components/main-section/pet-profile/pet-profile.component';
import { GraphComponent } from './dashboard/right-components/main-section/graph/graph.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PetProfileComponent
      },
      {
        path: 'graph',
        component: GraphComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
