import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CertificateRequestService} from "../../services/certificate-request.service";
import {CertificateRequest} from "../../models/certificate-request";
import {Certificate} from "../../models/certificate";
import {AuthService} from "../../../../infrastructure/auth/auth.service";

@Component({
  selector: 'app-certificate-request-host-page',
  templateUrl: './certificate-request-host-page.component.html',
  styleUrls: ['./certificate-request-host-page.component.css']
})
export class CertificateRequestHostPageComponent {
  hostId!: number;
  certificateRequests!: CertificateRequest[];
  certificate!: Certificate;
  loggedUserId!: number|undefined;
  constructor(private route: ActivatedRoute, private certificateRequestService: CertificateRequestService, private authService: AuthService) {
  }
  ngOnInit(){
    this.loggedUserId = this.authService.getId();
    this.route.params.subscribe((params) => {
      this.hostId = params['id'];

    });
    this.certificateRequestService.getAllForHost(this.hostId).subscribe((data)=>
    {
      this.certificateRequests = data;
    });
    this.certificateRequestService.getCertificateForHost(this.hostId).subscribe((data)=>
      {
        this.certificate = data;
      }
    )
  }
}
