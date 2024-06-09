import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import {Component, Host, OnInit} from "@angular/core";
import { AuthService } from "../../../infrastructure/auth/auth.service";
import { Guest } from "../../users/models/guest.model";
import {BlacklistService} from "../blacklist.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerPersonalForm: FormGroup = this.formBuilder.group({
    toggleHost: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  registerContactForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.pattern("^\\+(?:[0-9]●?){6,14}[0-9]$"), Validators.required])
  });

  registerPasswordForm: FormGroup = this.formBuilder.group({
    password: new FormControl('', [Validators.required, Validators.minLength(8), this.weakPasswordValidator()]),
    passwordConfirmation: new FormControl('', [Validators.required])
  }, { validators: [this.matchValidator('password', 'passwordConfirmation'), this.passwordLengthValidator('password')] });

  hide: boolean = true;
  passwordMatch: boolean = false;
  isEditable: boolean = true;
  captcha: string | null;
  blacklist: string[] = [];


  constructor(private authService: AuthService, private formBuilder: FormBuilder, private blacklistService: BlacklistService) {
    this.captcha = '';
  }

  ngOnInit(){
    this.blacklistService.getBlacklist().subscribe(data => {
      this.blacklist = data;
      console.log(this.blacklist)
    });
  }

  resolved(captchaResponse: string | null) {
    this.captcha = captchaResponse;
  }

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
        return null;
      }

      if (control!.value !== matchingControl!.value) {
        const error = { confirmedValidator: 'Passwords do not match.' };
        this.passwordMatch = false;
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        this.passwordMatch = true;
        return null;
      }
    }
  }

  passwordLengthValidator(controlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);

      if (control!.value && control!.value.length < 8) {
        const error = { passwordLength: 'Password must be at least 8 characters long.' };
        control!.setErrors(error);
        return error;
      } else {
        return null;
      }
    }
  }

  weakPasswordValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      if (this.blacklist.includes(control.value)) {
        return { weakPassword: 'Password is too weak.' };
      }
      return null;
    };
  }

  register() {
    this.isEditable = false;
    if (this.registerPersonalForm.value.toggleHost) {
      let user: Host = {
        address: this.registerPersonalForm.value.address,
        email: this.registerContactForm.value.email,
        firstName: this.registerPersonalForm.value.firstName,
        lastName: this.registerPersonalForm.value.lastName,
        password: this.registerPasswordForm.value.password,
        phoneNumber: this.registerContactForm.value.phone,
        role: 2
      };

      this.authService.registerHost(user).subscribe();
    } else {
      let user: Guest = {
        address: this.registerPersonalForm.value.address,
        email: this.registerContactForm.value.email,
        firstName: this.registerPersonalForm.value.firstName,
        lastName: this.registerPersonalForm.value.lastName,
        password: this.registerPasswordForm.value.password,
        phoneNumber: this.registerContactForm.value.phone,
        role: 1
      };

      console.log(user);
      this.authService.registerGuest(user).subscribe(data => {
        next: console.log(data)
      });
    }
  }
}
