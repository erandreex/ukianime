import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from './interfaces/auth.interface';

export interface rutasAuth {
    path: string;
    name: string;
    icon: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public _auth: boolean = false;

    private urlServer: string = environment.urlServer;
    private _user!: Usuario | null;

    constructor(private http: HttpClient) {}

    get user() {
        return { ...this._user };
    }

    get auth() {
        return this._auth;
    }

    reset() {
        this._auth = false;
        this._user = null;
    }

    validarToken() {
        const url = `${this.urlServer}/auth`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        return this.http.get<AuthResponse>(url, { headers }).pipe(
            tap((resp) => {
                if (resp.ok) {
                    this._user = resp.user!;
                    localStorage.setItem('token', resp.token!);
                    this._auth = true;
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => {
                this._auth = false;
                this._user = null;
                return of(false);
            })
        );
    }

    registro(firstname: string, username: string, password: string) {
        const url = `${this.urlServer}/auth/new`;

        const body = { firstname, username, password };

        return this.http.post<AuthResponse>(url, body).pipe(
            tap((resp) => {
                if (resp.ok) {
                    this._user = resp.user!;
                    this._auth = true;
                    localStorage.setItem('token', resp.token!);
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => {
                console.log(err);
                this._auth = false;
                this._user = null;
                return of(err.error);
            })
        );
    }

    login(username: string, password: string) {
        const url = `${this.urlServer}/auth`;
        const body = { username, password };

        return this.http.post<AuthResponse>(url, body).pipe(
            tap((resp) => {
                if (resp.ok) {
                    this._user = resp.user!;
                    this._auth = true;
                    localStorage.setItem('token', resp.token!);
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => {
                this._auth = false;
                this._user = null;
                return of(err.error);
            })
        );
    }

    cambiarPass(oldPassword: string, password: string) {
        const url = `${this.urlServer}/auth/cambiarPass`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        const body = { oldPassword, password };

        return this.http.post<any>(url, body, { headers }).pipe(
            tap((resp) => {
                if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                    this._auth = true;
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    cambiarPassRest(password: string) {
        const url = `${this.urlServer}/rest/cambiarPass`;
        const headers = new HttpHeaders({
            'x-rest': localStorage.getItem('x-rest') || '',
        });

        const body = { password };

        return this.http.post<any>(url, body, { headers }).pipe(
            tap((resp) => {
                localStorage.setItem('token', resp.token!);
                this._auth = true;
            }),
            map((resp) => resp.ok),
            catchError((err) => {
                this._auth = false;
                this._user = null;
                return of(err.error);
            })
        );
    }

    public rutasAuth: rutasAuth[] = [
        {
            path: 'browse',
            name: 'Browse',
            icon: 'fa-solid fa-house fa-lg',
        },
        {
            path: 'search',
            name: 'Buscar',
            icon: 'fa-solid fa-magnifying-glass fa-lg',
        },
        {
            path: 'favoritos/1',
            name: 'Favoritos',
            icon: 'fa-solid fa-star fa-lg',
        },
        {
            path: 'account',
            name: 'Cuenta',
            icon: 'fa-solid fa-circle-user fa-lg',
        },
    ];

    public maxScreen: rutasAuth[] = [
        {
            path: 'favoritos/1',
            name: 'Favoritos',
            icon: 'fa-solid fa-star fa-lg',
        },
    ];
}
