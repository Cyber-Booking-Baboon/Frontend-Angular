import {Component, Input} from '@angular/core';
import {Certificate} from "../../../models/certificate";
import {CertificateRequest} from "../../../models/certificate-request";

@Component({
  selector: 'app-certificate-request-cards',
  templateUrl: './certificate-request-cards.component.html',
  styleUrls: ['./certificate-request-cards.component.css']
})
export class CertificateRequestCardsComponent {
  @Input() certificateRequests!: CertificateRequest[];
}
