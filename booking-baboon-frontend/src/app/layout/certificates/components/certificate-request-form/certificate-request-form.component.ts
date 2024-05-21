import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {CertificateService} from "../../services/certificate.service";
import {SharedService} from "../../../../shared/shared.service";
import {map} from "rxjs/operators";
import {CertificateRequest, CertificateRequestStatus} from "../../models/certificate-request";
import {CertificateRequestService} from "../../services/certificate-request.service";
import {AuthService} from "../../../../infrastructure/auth/auth.service";
import _default from "chart.js/dist/plugins/plugin.tooltip";

@Component({
  selector: 'app-certificate-request-form',
  templateUrl: './certificate-request-form.component.html',
  styleUrls: ['./certificate-request-form.component.css']
})
export class CertificateRequestFormComponent {
  certificateForm!: FormGroup;


  constructor(private fb: FormBuilder, private certificateService: CertificateService, private certificateRequestService: CertificateRequestService, private sharedService: SharedService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }




  initForm(): void {
    this.certificateForm = this.fb.group({
      alias: [
        "",
        [Validators.required],
        [this.aliasUniqueValidator(this.certificateService)]
      ],
      subjectCN: ["", Validators.required],
      subjectSurname: ["", Validators.required],
      subjectGivenName: ["", Validators.required],
      subjectO: ["", Validators.required],
      subjectOU: ["", Validators.required],
      subjectC: ["", Validators.required],
      subjectE: ["", [Validators.required, Validators.email]],

    });
  }

  onSubmitClick() {

    if (this.certificateForm.valid) {
      const certificateRequest: CertificateRequest = this.certificateForm.value;
      certificateRequest.issuerAlias = "BookingBaboonCertificate";
      certificateRequest.extensions = [];
      certificateRequest.status = CertificateRequestStatus.PENDING;
      certificateRequest.startDate = new Date().toISOString();
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 10);
      certificateRequest.endDate = futureDate.toISOString();
      if(this.authService.getId() != undefined){
        certificateRequest.subjectUID = <string>this.authService.getId()?.toString();
      }
      console.log('Submitted certificate:', certificateRequest);

      this.certificateService.checkAliasUniqueness(certificateRequest.alias).subscribe({
        next: (isUnique: boolean) => {
          if (isUnique) {
            this.issueCertificateRequest(certificateRequest);
          } else {
            this.sharedService.openSnack("Alias is not unique");
          }
        },
        error: (_) => {
          console.log("Error while checking alias uniqueness");
          this.sharedService.openSnack("An error occurred while checking alias uniqueness");
        }
      });
    }
  }

  issueCertificateRequest(certificateRequest : CertificateRequest): void {
    this.certificateRequestService.create(certificateRequest).subscribe({
      next: (data: CertificateRequest) => {
        if(data !== null){
          this.sharedService.openSnack("Certificate request has been created successfully");
        }
      },
      error: (_) => {
        console.log("Error!");
        this.sharedService.openSnack("Certificate request has not been created");
      }
    });
  }

  aliasUniqueValidator(certificateService: CertificateService): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const alias = control.value;
      if (alias) {
        return certificateService.checkAliasUniqueness(alias).pipe(
          map((isUnique: boolean) => {
            return isUnique ? null : { aliasNotUnique: true };
          })
        );
      } else {
        return null;
      }
    };
  }







}
