import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from "../../models/certificate";
import {CertificateRequest} from "../../models/certificate-request";

@Component({
  selector: 'app-certificate-request-cards-host',
  templateUrl: './certificate-request-cards-host.component.html',
  styleUrls: ['./certificate-request-cards-host.component.css']
})
export class CertificateRequestCardsHostComponent implements OnInit{
  @Input() certificateRequests!: CertificateRequest[];

  ngOnInit() {
  }
}
