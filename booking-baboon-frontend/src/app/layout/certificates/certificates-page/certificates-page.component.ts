import { Component } from '@angular/core';
import {AccommodationFilter} from "../../accommodations/search/models/accommodationFilter.model";
import {Accommodation} from "../../accommodations/shared/models/accommodation.model";
import {Certificate} from "../certificate";
import {CertificateService} from "../certificate.service";

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.css']
})
export class CertificatesPageComponent {
  // certificates!: Certificate[];
  certificates = [{},{},{}]

  constructor(private certificateService: CertificateService) {
  }
  load(): void {
    this.certificateService.getAll().subscribe({
      next: (data: Certificate[]) => {
        this.certificates = data;
      },
      error: (_) => {
        console.log("Error!");
      }
    });
  }
}
