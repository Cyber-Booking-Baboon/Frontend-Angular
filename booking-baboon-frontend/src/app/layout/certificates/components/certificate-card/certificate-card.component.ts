import {Component, Input} from '@angular/core';
import {Accommodation} from "../../../accommodations/shared/models/accommodation.model";
import {Certificate} from "../../models/certificate";
import {CertificateService} from "../../services/certificate.service";
import {CertificateExtension} from "../../models/certificate.extension";
import {SharedService} from "../../../../shared/shared.service";

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

  constructor(private certificateService: CertificateService, private sharedService:SharedService) {
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

  onRemoveClicked() {
    this.certificateService.remove(this.certificate.alias).subscribe({
      next: (data: boolean) => {
        this.sharedService.openSnack("Certificate is removed successfully");
        location.reload();
        console.log(data)
      },
      error: (_) => {
        this.sharedService.openSnack("Certificate is not removed");
      }
    });
  }

  onValidateClicked() {
    this.certificateService.checkValidity(this.certificate.alias).subscribe({
      next: (data: boolean) => {
        this.sharedService.openSnack("Certificate is valid");
        console.log(data)
      },
      error: (_) => {
        this.sharedService.openSnack("Certificate is not valid");
      }
    });
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
