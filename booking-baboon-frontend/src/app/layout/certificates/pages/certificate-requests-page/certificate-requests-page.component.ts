import {Component, OnInit} from '@angular/core';
import {Certificate} from "../../models/certificate";
import {CertificateRequest} from "../../models/certificate-request";
import {CertificateRequestService} from "../../services/certificate-request.service";

@Component({
  selector: 'app-certificate-requests-page',
  templateUrl: './certificate-requests-page.component.html',
  styleUrls: ['./certificate-requests-page.component.css']
})
export class CertificateRequestsPageComponent implements OnInit{
  certificateRequests!: CertificateRequest[];

  constructor(private certificateRequestService: CertificateRequestService) {
  }
  ngOnInit() {
    this.loadCertificateRequests()
  }

  loadCertificateRequests(){
    this.certificateRequestService.getAllPending().subscribe({
      next: (data: CertificateRequest[]) => {
        this.certificateRequests = data;
      },
      error: (_) => {
        console.log("Error!");
      }
    });
  }
}
