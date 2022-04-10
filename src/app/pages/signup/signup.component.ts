import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  formSent: boolean = false;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      company: new FormControl('', [Validators.required]),
      segment: new FormControl('', [Validators.required]),
      users: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get company() {
    return this.signUpForm.get('company')!;
  }

  get segment() {
    return this.signUpForm.get('segment')!;
  }

  get users() {
    return this.signUpForm.get('users')!;
  }

  get name() {
    return this.signUpForm.get('name')!;
  }

  get email() {
    return this.signUpForm.get('email')!;
  }

  get phone() {
    return this.signUpForm.get('phone')!;
  }

  get password() {
    return this.signUpForm.get('password')!;
  }

  submit() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.formSent = true;
  }

  resetForm() {
    this.formSent = false;
  }
}
