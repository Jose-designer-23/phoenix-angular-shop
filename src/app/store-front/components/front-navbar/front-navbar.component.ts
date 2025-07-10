import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { ThemeService } from '../../../themeDark.service';
import { LanguageService, AvailableLocale } from '../../../locale.service';
import { CartService } from '@store-front/pages/cart-page/services/cart.service';

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './front-navbar.component.html',
})

export class FrontNavbarComponent  {

  authService = inject(AuthService);

  themeService = inject(ThemeService);

  languageService = inject(LanguageService);

  cartService = inject(CartService);

    onToggleDarkMode(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.themeService.toggleDarkMode(checked);
  }

    // onToggleLanguage(event: Event){
    //   const checked = (event.target as HTMLInputElement).checked;

    //   const newLocale : AvailableLocale = checked ? "es" : "en";

    //   this.languageService.changeLocale(newLocale);
    // }
}

