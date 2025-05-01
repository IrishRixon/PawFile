import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ImageModule } from 'primeng/image';
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CarouselModule } from 'primeng/carousel';

import { SearchBarComponent } from './dashboard/left-components/search-bar/search-bar.component';
import { CardComponent } from './dashboard/left-components/card/card.component';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialComponent } from './dashboard/right-components/speed-dial/speed-dial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { NavComponent } from './dashboard/right-components/nav/nav.component';
import { ProfilePicComponent } from './dashboard/right-components/profile-pic/profile-pic.component';
import { MessageComponent } from './dashboard/right-components/message/message.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchBarComponent,
    CardComponent,
    SpeedDialComponent,
    NavComponent,
    ProfilePicComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    InputGroupModule,
    InputGroupAddonModule,
    SkeletonModule,
    ButtonModule,
    ImageModule,
    ReactiveFormsModule,
    TextareaModule,
    TabsModule,
    InputTextModule,
    InputMaskModule,
    CarouselModule
  ]
})
export class DashboardModule { }
