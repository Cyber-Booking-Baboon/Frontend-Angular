import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from "../../models/certificate";
import {CertificateRequest, CertificateRequestStatus} from "../../models/certificate-request";

@Component({
  selector: 'app-certificate-request-card-host',
  templateUrl: './certificate-request-card-host.component.html',
  styleUrls: ['./certificate-request-card-host.component.css']
})
export class CertificateRequestCardHostComponent implements OnInit{
  @Input() certificateRequest!: CertificateRequest;

  ngOnInit() {
  }

  parseSimpleDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    };
    return date.toLocaleString('en-US', options);
  }

  protected readonly CertificateRequestStatus = CertificateRequestStatus;
}
