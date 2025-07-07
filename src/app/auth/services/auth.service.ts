import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FullName } from '../../products/interfaces/product.interface';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authStatus = signal<AuthStatus>('checking');
    private _user = signal<User | null>(null);
    private _token = signal<string | null>(localStorage.getItem("token"));

    private http = inject(HttpClient);

    checkStatusResource = rxResource({
      loader:() => this.checkStatus(),
    })

    authStatus = computed<AuthStatus>(() => {
      if (this._authStatus() === 'checking') return 'checking';

      if (this._user()) {
        return 'authenticated';
      }

      return 'not-authenticated';
    });

    user = computed(() => this._user());
    token = computed(this._token);
    isAdmin = computed(() => this._user()?.roles.includes("admin") ?? false);

    login(email: string, password: string): Observable<boolean> {
      return this.http.post<AuthResponse>(`${baseUrl}/auth/login`,{
        email: email,
        password: password,

      })
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error: any) => this.handleAuthError(error)),
      );

    };

      //REGISTRO: EMAIL, PASSWORD, FULLNAME
      register(fullName: string , email: string, password: string): Observable<boolean> {
      return this.http.post<AuthResponse>(`${baseUrl}/auth/register`,{
        fullName: fullName,
        email: email,
        password: password,

      })
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error: any) => this.handleAuthError(error)),
      );

    };



      private lastStatusCheck: number | null = null;
      private lastStatusResult: boolean | null = null;

      checkStatus(): Observable<boolean> {
        const token = localStorage.getItem('token');
        if (!token) {
          this.logout();
          return of(false);
        }

        const now = Date.now();

        const THIRTY_MINUTES = 30 * 60 * 1000;

        if (
          this.lastStatusCheck &&
          this.lastStatusResult !== null &&
          now - this.lastStatusCheck < THIRTY_MINUTES
        ) {

          return of(this.lastStatusResult);
        }

        return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`).pipe(
          map((resp) => {
            const result = this.handleAuthSuccess(resp);
            this.lastStatusCheck = Date.now();
            this.lastStatusResult = result;
            return result;
          }),
          catchError((error: any) => {
            this.lastStatusCheck = Date.now();
            this.lastStatusResult = false;
            return this.handleAuthError(error);
          }),
        );
      }

    logout() {
      this._user.set(null);
      this._token.set(null);
      this._authStatus.set("not-authenticated");

      localStorage.removeItem("token");
    }

    private handleAuthSuccess({token, user}: AuthResponse) {
          this._user.set(user);
          this._authStatus.set('authenticated');
          this._token.set(token);

          localStorage.setItem('token', token);

          return true;
        }

    private handleAuthError(error: any){
      this.logout();
      return of (false);
    }
  }





