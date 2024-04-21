import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CertificateRequestService} from "../../services/certificate-request.service";

@Component({
  selector: 'app-certificate-request-host-page',
  templateUrl: './certificate-request-host-page.component.html',
  styleUrls: ['./certificate-request-host-page.component.css']
})
export class CertificateRequestHostPageComponent {
  hostId!: string;
  constructor(private route: ActivatedRoute, private certificateRequestService: CertificateRequestService) {
  }
  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.hostId = params['id'];

    });

  }
}
