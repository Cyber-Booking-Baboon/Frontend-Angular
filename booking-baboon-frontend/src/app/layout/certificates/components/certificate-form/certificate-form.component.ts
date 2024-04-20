import {Component, Input} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {AvailablePeriod} from "../../../accommodations/shared/models/available-period.model";
import {Certificate} from "../../models/certificate";

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {
  @Input()
  issuerAlias !: string;

  certificateForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.certificateForm = this.fb.group({
      issuerAlias: [{ value: this.issuerAlias, disabled: true }, Validators.required],
      alias: ['', Validators.required],
      startDate: ['', [Validators.required, this.dateInFutureValidator.bind(this)]],
      endDate: ['', [Validators.required, this.dateInFutureValidator.bind(this)]],
      subject: this.fb.group({
        commonName: ['', Validators.required],
        surname: ['', Validators.required],
        givenName: ['', Validators.required],
        organization: ['', Validators.required],
        organizationalUnit: ['', Validators.required],
        country: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        userId: ['', Validators.required]
      })
    });
  }

  onSubmitClick() {
    if (this.certificateForm.valid) {
      const certificate: Certificate = this.certificateForm.value;
      console.log('Submitted certificate:', certificate);
    }
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
}
