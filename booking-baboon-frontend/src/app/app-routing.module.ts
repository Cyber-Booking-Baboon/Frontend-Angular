import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./layout/authentication/login/login.component";
import {RegisterComponent} from "./layout/authentication/register/register.component";
import {
  AccommodationDetailsPageComponent
} from "./layout/accommodations/search/pages/accommodation-details-page/accommodation-details-page.component";
import {AccommodationsPageComponent} from "./layout/accommodations/search/pages/accommodations-page/accommodations-page.component";
import {ProfileComponent} from "./layout/users/pages/profile/profile.component";
import {AuthGuard} from "./infrastructure/auth/guard/auth.guard";
import {ActivationComponent} from "./layout/authentication/activation/activation.component";
import {HostProfilePageComponent} from "./layout/users/pages/host-profile-page/host-profile-page.component";
import {
  HostAccommodationsListComponent
} from "./layout/accommodations/host/pages/host-accommodations-list/host-accommodations-list.component";
import {
  AccommodationModificationPageComponent
} from "./layout/accommodations/modification/pages/accommodation-modification-page/accommodation-modification-page.component";
import {
  AccommodationModificationDetailsPageComponent
} from "./layout/accommodations/modification/pages/accommodation-modification-details-page/accommodation-modification-details-page.component";
import {
  ReservationRequestPageComponent
} from "./layout/reservations/reservation-request-page/reservation-request-page.component";
import {
  AccommodationCreationPageComponent
} from "./layout/accommodations/host/pages/accommodation-creation-page/accommodation-creation-page.component";
import {
  AccommodationAvailablePeriodPageComponent
} from "./layout/accommodations/host/pages/accommodation-available-period-page/accommodation-available-period-page.component";
import {
  EditAccommodationPageComponent
} from "./layout/accommodations/host/pages/edit-accommodation-page/edit-accommodation-page.component";
import {LoginGuard} from "./infrastructure/auth/guard/login.guard";
import {
  GuestReservationsPageComponent
} from "./layout/reservations/guest/guest-reservations-page/guest-reservations-page.component";
import {
  HostReservationsPageComponent
} from "./layout/reservations/host/host-reservations-page/host-reservations-page.component";
import {GuestReviewsPageComponent} from "./layout/reviews/guest-reviews-page/guest-reviews-page.component";
import {
  MonthlySummaryDialogComponent
} from "./layout/summaries/monthlySummary/monthly-summary-dialog/monthly-summary-dialog.component";
import {
  SummaryGeneratorPageComponent
} from "./layout/summaries/periodSummary/summary-generator-page/summary-generator-page.component";
import{
  FavoriteAccommodationsPageComponent
} from "./layout/accommodations/favorites/favorite-accommodations-page/favorite-accommodations-page.component";
import {NotificationPageComponent} from "./layout/notifications/notification-page/notification-page.component";
import {
  AdminReviewReportsPageComponent
} from "./layout/reports/admin-review-reports-page/admin-review-reports-page.component";
import {CertificatesPageComponent} from "./layout/certificates/pages/certificates-page/certificates-page.component";
import {
  IssueCertificatePageComponent
} from "./layout/certificates/pages/issue-certificate-page/issue-certificate-page.component";
import {
  CertificateRequestsPageComponent
} from "./layout/certificates/pages/certificate-requests-page/certificate-requests-page.component";
import {
  CertificateRequestHostPageComponent
} from "./layout/certificates/pages/certificate-request-host-page/certificate-request-host-page.component";
import {
  IssueCertificateRequestPageComponent
} from "./layout/certificates/pages/issue-certificate-request-page/issue-certificate-request-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accommodations',
    pathMatch: 'full'
  },
  {
    component: LoginComponent,
    path:"login",
    canActivate: [LoginGuard]
  },
  {
    component: RegisterComponent,
    path:"register",
    canActivate: [LoginGuard]
  },
  {
    component: AccommodationsPageComponent,
    path:"accommodations"
  },
  {
    component: AccommodationDetailsPageComponent,
    path:"accommodations/:accommodationId"},
  {
    component: ProfileComponent,
    path:"profile/:userId",
    canActivate: [AuthGuard],
    data: {role: ['ADMIN', 'GUEST', 'HOST']}
  },
  {
    component: ActivationComponent,
    path:"users/activate"
  },
  {
    component: HostProfilePageComponent,
    path:"host/profile/:hostId"
  },
  {
    component: HostAccommodationsListComponent,
    path:"host/accommodations",
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: AccommodationModificationPageComponent,
    path:"accommodation-modifications",
    canActivate: [AuthGuard],
    data: {role: ['ADMIN']}
  },
  {
    component: AccommodationModificationDetailsPageComponent,
    path:"accommodation-modifications/:accommodationModificationId",
    canActivate: [AuthGuard],
    data: {role: ['ADMIN']}
  },
  {
    component: ReservationRequestPageComponent,
    path:"accommodations/:accommodationId/reserve",
    canActivate: [AuthGuard],
    data: {role: ['GUEST']}
  },
  {
    component: AccommodationCreationPageComponent,
    path: "host/accommodations/create",
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: AccommodationAvailablePeriodPageComponent,
    path: 'accommodations/periods/:id',
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: EditAccommodationPageComponent,
    path: 'accommodations/:accommodationId/edit',
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: GuestReservationsPageComponent,
    path: 'guest/:guestId/reservations',
    canActivate: [AuthGuard],
    data: {role: ['GUEST']}
  },
  {
    component: HostReservationsPageComponent,
    path: 'host/:guestId/reservations',
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: GuestReviewsPageComponent,
    path: 'guest/:guestId/reviews',
    canActivate: [AuthGuard],
    data: {role: ['GUEST']}
  },
  {
    component: SummaryGeneratorPageComponent,
    path: 'host/accommodations/summary-generator',
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: FavoriteAccommodationsPageComponent,
    path: 'guest/:guestId/favorites',
    canActivate: [AuthGuard],
    data: {role: ['GUEST']}
  },
  {
    component: NotificationPageComponent,
    path: 'notifications/:userId',
    canActivate: [AuthGuard],
    data: {role: ['GUEST','HOST']}
  },
  {
    component: AdminReviewReportsPageComponent,
    path: 'review-reports',
    canActivate: [AuthGuard],
    data: {role: ['ADMIN']}
  },
  {
    component: CertificatesPageComponent,
    path: 'certificates',
    canActivate: [AuthGuard],
    data: {role: ['SYSADMIN']}
  },
  {
    component: IssueCertificatePageComponent,
    path:"certificates/:alias/issue",
    canActivate: [AuthGuard],
    data: {role: ['SYSADMIN']}
  },
  {
    component: CertificateRequestsPageComponent,
    path: 'certificate-requests',
    canActivate: [AuthGuard],
    data: {role: ['SYSADMIN']}
  },
  {
    component: CertificateRequestHostPageComponent,
    path:"certificate-requests/host/:id",
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
  {
    component: IssueCertificateRequestPageComponent,
    path:"certificate-requests/host/:id/issue",
    canActivate: [AuthGuard],
    data: {role: ['HOST']}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
