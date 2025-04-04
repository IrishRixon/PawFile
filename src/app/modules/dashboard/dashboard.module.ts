import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SearchBarComponent } from './dashboard/left-components/search-bar/search-bar.component';
import { CardComponent } from './dashboard/left-components/card/card.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MainSectionComponent } from './dashboard/right-components/main-section/main-section.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchBarComponent,
    CardComponent,
    MainSectionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    InputGroupModule,
    InputGroupAddonModule
  ]
})
export class DashboardModule { }
