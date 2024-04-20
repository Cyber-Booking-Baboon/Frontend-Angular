import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from "../../../accommodations/shared/models/accommodation.model";
import {AccommodationService} from "../../../accommodations/shared/services/accommodation.service";
import {Certificate} from "../../models/certificate";
import {CertificateService} from "../../certificate.service";

@Component({
  selector: 'app-certificate-cards',
  templateUrl: './certificate-cards.component.html',
  styleUrls: ['./certificate-cards.component.css']
})
export class CertificateCardsComponent implements OnInit{
  @Input() certificates!: Certificate[];
  constructor(private certificateService: CertificateService) {
  }
  ngOnInit(): void {
  }

}
