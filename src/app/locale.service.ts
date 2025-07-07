import { computed, Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLocale = signal<AvailableLocale>('es');

  isSpanish = computed(() => this.currentLocale() === 'es');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
    );
  };

  get getLocale() {
    return this.currentLocale();
  };

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  };


};
