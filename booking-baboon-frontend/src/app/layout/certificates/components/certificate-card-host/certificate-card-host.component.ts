import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from "../../models/certificate";
import {CertificateService} from "../../services/certificate.service";

@Component({
  selector: 'app-certificate-card-host',
  templateUrl: './certificate-card-host.component.html',
  styleUrls: ['./certificate-card-host.component.css']
})
export class CertificateCardHostComponent{
  @Input()
  certificate!: Certificate;
  hide: boolean = true;
  text: string = "Reveal private key";
  privateKey!:string;

  constructor(private certificateService: CertificateService) {
  }

  getKey(): void {
    this.certificateService.getPrivateKey(this.certificate.subject.userId ,this.certificate.alias).subscribe({
      next: (data: string) => {
        this.privateKey = data;
      },
      error: (m) => {
        console.log(m)
        console.log("Error!");
      }
    })
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

  onGetPrivateKeyClicked() {
    this.hide = !this.hide;
    this.getKey();
    if(this.hide){
      this.text = "Reveal private key";
    }else{
      this.text = "Hide private key";
    }


  }
}
