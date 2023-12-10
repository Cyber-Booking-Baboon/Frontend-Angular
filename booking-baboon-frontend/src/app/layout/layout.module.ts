import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Navbars/navbar/navbar.component';
import {MaterialModule} from "../infrastructure/material/material.module";
import {RouterLink, RouterModule} from "@angular/router";
import { LoginComponent } from '../infrastructure/auth/login/login.component';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { NavbarGuestComponent } from './Navbars/navbar-guest/navbar-guest.component';
import { NavbarHostComponent } from './Navbars/navbar-host/navbar-host.component';
import { NavbarAdminComponent } from './Navbars/navbar-admin/navbar-admin.component';
import { NavbarUnauthorizedComponent } from './Navbars/navbar-unauthorized/navbar-unauthorized.component';
import { AccommodationsSearchBarComponent } from './accommodations/components/accommodations-search-bar/accommodations-search-bar.component';
import { AccommodationCardsComponent } from './accommodations/components/accommodation-cards/accommodation-cards.component';
import { AccommodationCardComponent } from './accommodations/components/accommodation-card/accommodation-card.component';
import { AccommodationDetailsComponent } from './accommodations/components/accommodation-details/accommodation-details.component';
import { ImageCarouselComponent } from './accommodations/components/image-carousel/image-carousel.component';
import { AccommodationDetailsPageComponent } from './accommodations/pages/accommodation-details-page/accommodation-details-page.component';
import { AccommodationsPageComponent } from './accommodations/pages/accommodations-page/accommodations-page.component';
import { ProfileComponent } from './authentication/pages/profile/profile.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccommodationFilterComponent } from './accommodations/components/accommodation-filter/accommodation-filter.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Interceptor} from "../infrastructure/auth/interceptor";
import { ActivationComponent } from './authentication/pages/activation/activation.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import {SharedModule} from "../shared/shared.module";
import { HostAccommodationsListComponent } from './accommodations/pages/host-accommodations-list/host-accommodations-list.component';
import { HostAccommodationCardComponent } from './accommodations/components/host-accommodation-card/host-accommodation-card.component';
import { HostAccommodationCardsComponent } from './accommodations/components/host-accommodation-cards/host-accommodation-cards.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NavbarGuestComponent,
    NavbarHostComponent,
    NavbarAdminComponent,
    NavbarUnauthorizedComponent,
    AccommodationsSearchBarComponent,
    AccommodationCardsComponent,
    AccommodationCardComponent,
    AccommodationDetailsComponent,
    ImageCarouselComponent,
    AccommodationDetailsPageComponent,
    AccommodationsPageComponent,
    AccommodationFilterComponent,
    ProfileComponent,
    ActivationComponent,
    ConfirmComponent,
    HostAccommodationsListComponent,
    HostAccommodationCardComponent,
    HostAccommodationCardsComponent
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ActivationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    SharedModule
  ]
})
export class LayoutModule { }
