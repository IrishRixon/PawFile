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
import { MainSectionComponent } from './dashboard/right-components/main-section/main-section.component';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialComponent } from './dashboard/right-components/speed-dial/speed-dial.component';
import { NavBarComponent } from './dashboard/right-components/main-section/nav-bar/nav-bar.component';
import { PetProfileComponent } from './dashboard/right-components/main-section/pet-profile/pet-profile.component';
import { GraphComponent } from './dashboard/right-components/main-section/graph/graph.component';
import { ProfileMessageComponent } from './dashboard/right-components/main-section/pet-profile/profile-message/profile-message.component';
import { ProfilePicComponent } from './dashboard/right-components/main-section/pet-profile/profile-message/profile-pic/profile-pic.component';
import { MessageComponent } from './dashboard/right-components/main-section/pet-profile/profile-message/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ProfileDetailsComponent } from './dashboard/right-components/main-section/pet-profile/profile-details/profile-details.component';
import { PetDetailsComponent } from './dashboard/right-components/main-section/pet-profile/profile-details/pet-details/pet-details.component';
import { OwnerDetailsComponent } from './dashboard/right-components/main-section/pet-profile/profile-details/owner-details/owner-details.component';
import { MedicalDetailsComponent } from './dashboard/right-components/main-section/pet-profile/profile-details/medical-details/medical-details.component';
import { CarouselComponent } from './dashboard/right-components/main-section/pet-profile/carousel/carousel.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchBarComponent,
    CardComponent,
    MainSectionComponent,
    SpeedDialComponent,
    NavBarComponent,
    PetProfileComponent,
    GraphComponent,
    ProfileMessageComponent,
    ProfilePicComponent,
    MessageComponent,
    ProfileDetailsComponent,
    PetDetailsComponent,
    OwnerDetailsComponent,
    MedicalDetailsComponent,
    CarouselComponent,
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
