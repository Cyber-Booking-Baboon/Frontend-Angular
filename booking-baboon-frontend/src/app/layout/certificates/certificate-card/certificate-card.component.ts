import {Component, Input} from '@angular/core';
import {Accommodation} from "../../accommodations/shared/models/accommodation.model";
import {Certificate} from "../certificate";

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css']
})
export class CertificateCardComponent {
  @Input()
  certificate!: Certificate;
}
