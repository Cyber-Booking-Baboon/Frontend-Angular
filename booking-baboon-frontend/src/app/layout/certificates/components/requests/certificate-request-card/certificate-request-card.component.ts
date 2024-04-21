import {Component, Input} from '@angular/core';
import {CertificateRequest, CertificateRequestStatus} from "../../../models/certificate-request";
import {CertificateRequestService} from "../../../services/certificate-request.service";
import {SharedService} from "../../../../../shared/shared.service";

@Component({
  selector: 'app-certificate-request-card',
  templateUrl: './certificate-request-card.component.html',
  styleUrls: ['./certificate-request-card.component.css']
})
export class CertificateRequestCardComponent {
  @Input()
  certificateRequest!: CertificateRequest;


  constructor(private certificateRequestService: CertificateRequestService, private sharedService: SharedService) {
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


  onApproveClicked() {
    this.certificateRequestService.approve(this.certificateRequest.id).subscribe({
      next: (data: CertificateRequest) => {
        if (data.status === CertificateRequestStatus.APPROVED) {
          this.sharedService.openSnack("Certificate request has been approved successfully");
        }
      },
      error: (_) => {
        console.log("Error!");
        this.sharedService.openSnack("Certificate request has not been approved");
      }
    });
  }

  onDenyClicked() {
    this.certificateRequestService.deny(this.certificateRequest.id).subscribe({
      next: (data: CertificateRequest) => {
        if (data.status === CertificateRequestStatus.DENIED) {
          this.sharedService.openSnack("Certificate request has been denied successfully");
        }
      },
      error: (_) => {
        console.log("Error!");
        this.sharedService.openSnack("Certificate request has not been denied");
      }
    });
  }

}
