import {Component, Input} from '@angular/core';
import {Accommodation} from "../../../accommodations/shared/models/accommodation.model";
import {Certificate} from "../../models/certificate";
import {CertificateDTO} from "../../models/certificate.dto";
import {CertificateService} from "../../certificate.service";
import {CertificateExtension} from "../../models/certificate.extension";

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css']
})
export class CertificateCardComponent {
  @Input()
  certificate!: Certificate;
  children!: Certificate[]
  isDropped = false;

  constructor(private certificateService: CertificateService) {
  }

  loadChildren(): void {
    this.certificateService.getAllChildren(this.certificate.alias).subscribe({
      next: (data: Certificate[]) => {
        this.children = data;
      },
      error: (_) => {
        console.log("Error!");
      }
    });
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


  onIssueClicked() {

  }

  onRevokeClicked() {

  }

  onValidateClicked() {
    console.log(this.certificate)
  }

  toggleDropdown() {
    this.isDropped = !this.isDropped;
    if(this.isDropped){
      this.loadChildren()
    } else {
      this.children = [];
    }
  }
}