import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormUtils } from '../../../utils/form-utils';
import { CommonModule, NgClass } from '@angular/common';
import { AuthService } from '@auth/services/auth.service';
import { ThemeService } from '../../../themeDark.service';


@Component({
  selector: 'app-login-page',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  FormUtils = FormUtils;
  router = inject(Router)

  AuthService = inject(AuthService);
  themeService = inject(ThemeService);

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

 onSubmit() {
  this.loginForm.markAllAsTouched();

  if(this.loginForm.invalid){
    this.hasError.set(true);
    setTimeout(() => {
      this.hasError.set(false);
    }, 2000);
    return;
  }



  const {email = "", password = "" } = this.loginForm.value;

  this.AuthService.login(email!, password!).subscribe((isAuthenticated) => {

    if(isAuthenticated) {
      this.router.navigateByUrl("/");
      return;
    }

    this.hasError.set(true);
    setTimeout(() => {
      this.hasError.set(false);
    }, 2000);

  });


 };

};
