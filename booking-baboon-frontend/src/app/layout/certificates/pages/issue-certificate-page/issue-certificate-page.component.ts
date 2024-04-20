import {Component, Input} from '@angular/core';
import {Subject} from "../../models/subject";
import {Host} from "../../../users/models/host.model";
import {ActivatedRoute} from "@angular/router";
import {HostService} from "../../../users/services/host.service";

@Component({
  selector: 'app-issue-certificate-page',
  templateUrl: './issue-certificate-page.component.html',
  styleUrls: ['./issue-certificate-page.component.css']
})
export class IssueCertificatePageComponent {
  issuerAlias!: string;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.issuerAlias = params['alias'];

    });
  }
}
