import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-issue-certificate-request-page',
  templateUrl: './issue-certificate-request-page.component.html',
  styleUrls: ['./issue-certificate-request-page.component.css']
})
export class IssueCertificateRequestPageComponent {
  hostId!: string;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.hostId = params['id'];

    });
  }
}
