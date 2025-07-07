import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormUtils } from '../../../utils/form-utils';
import { CommonModule, NgClass } from '@angular/common';
import { AuthService } from '@auth/services/auth.service';
import { ThemeService } from '../../../themeDark.service';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
})
  export class RegisterPageComponent {

    fb = inject(FormBuilder);
    hasError = signal(false);
    isPosting = signal(false);
    FormUtils = FormUtils;
    router = inject(Router);

    AuthService = inject(AuthService);
    themeService = inject(ThemeService);

    registerForm = this.fb.group({
      fullName:["", [Validators.required, Validators.pattern(FormUtils.namePattern)]] ,
      email: ["", [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });

    onSubmit() {
      this.registerForm.markAllAsTouched();

      if(this.registerForm.invalid){
        this.hasError.set(true);
        setTimeout(() => {
          this.hasError.set(false);
        }, 2000);
        return;
      }

      const {fullName = "" ,email = "", password = "" } = this.registerForm.value;
      console.log({ fullName, email, password });
      this.AuthService.register(fullName! ,email!, password!).subscribe((isAuthenticated) => {

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






  }
