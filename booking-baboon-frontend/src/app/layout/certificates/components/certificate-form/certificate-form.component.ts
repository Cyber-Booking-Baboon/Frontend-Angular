import {Component, Input} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {AvailablePeriod} from "../../../accommodations/shared/models/available-period.model";
import {Certificate} from "../../models/certificate";
import {AccommodationType} from "../../../accommodations/shared/models/accommodation-type.model";
import {CertificateExtension} from "../../models/certificate.extension";
import {CertificateService} from "../../certificate.service";
import {SharedService} from "../../../../shared/shared.service";
import {CertificateCreateDTO} from "../../models/certificate.dto";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {
  @Input()
  issuerAlias !: string;
  certificateForm!: FormGroup;
  availableExtensions: CertificateExtension[] = [];

  formControls: any = {};
  extensionTypeForm: FormGroup = this.fb.group(this.formControls);

  constructor(private fb: FormBuilder, private certificateService: CertificateService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.initExtensions();
    this.initForm();
  }

  initExtensions() {
    this.certificateService.getExtensions(this.issuerAlias).subscribe({
      next: (data: CertificateExtension[]) => {
        if (data !== null) {
          this.availableExtensions = data;
          const formControls: any = {};
          data.forEach((extension: CertificateExtension) => {
            formControls[extension] = [false];
          });
          this.extensionTypeForm = this.fb.group(formControls);
        }
      },
      error: (_) => {
        console.log("Error!");
      }
    });
  }

  initForm(): void {
    this.certificateForm = this.fb.group({
      issuerAlias: [{ value: this.issuerAlias, disabled: true }, Validators.required],
      alias: [
        "",
        [Validators.required],
        [this.aliasUniqueValidator(this.certificateService)]
      ],
      startDate: [
        "",
        [Validators.required, this.dateInFutureValidator.bind(this)]
      ],
      endDate: [
        "",
        [Validators.required, this.dateInFutureValidator.bind(this)]
      ],
      subject: this.fb.group({
        commonName: ["", Validators.required],
        surname: ["", Validators.required],
        givenName: ["", Validators.required],
        organization: ["", Validators.required],
        organizationalUnit: ["", Validators.required],
        country: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        userId: ["", Validators.required]
      }),
      extensions: this.extensionTypeForm
    });
  }

  onSubmitClick() {

    if (this.certificateForm.valid) {
      const certificateCreateDTO: CertificateCreateDTO = this.certificateForm.value;
      certificateCreateDTO.issuerAlias = this.issuerAlias;
      certificateCreateDTO.extensions = this.getSelectedExtensionTypes()
      console.log('Submitted certificate:', certificateCreateDTO);

      this.certificateService.checkAliasUniqueness(certificateCreateDTO.alias).subscribe({
        next: (isUnique: boolean) => {
          if (isUnique) {
            this.issueCertificate(certificateCreateDTO);
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

  issueCertificate(certificateCreateDTO : CertificateCreateDTO): void {
    this.certificateService.issueCertificate(certificateCreateDTO).subscribe({
      next: (data: Certificate) => {
        if(data !== null){
          this.sharedService.openSnack("Certificate has been issued successfully");
        }
      },
      error: (_) => {
        console.log("Error!");
        this.sharedService.openSnack("Certificate has not been issued");
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

  getSelectedExtensionTypes(): CertificateExtension[] {
    return Object.keys(this.extensionTypeForm.controls)
      .filter((key) => this.extensionTypeForm.get(key)?.value)
      .map((key) => key as unknown as CertificateExtension);
  }

  dateInFutureValidator(control: AbstractControl): ValidationErrors | null {
    const cellDate = control.value;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (cellDate < currentDate) {
      return { invalidDate: true, message: 'Date should be in the future' };
    }

    return null;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (cellDate < currentDate) {
        return 'disabled-date-class';
      }
    }
    return '';
  };

  getEnumValues(enumType: any): string[] {
    const enumValues: string[] = [];
    for (const key in enumType) {
      if (typeof enumType[key] === 'string') {
        enumValues.push(enumType[key]);
      }
    }
    return enumValues;
  }

  protected readonly CertificateExtension = CertificateExtension;
}
