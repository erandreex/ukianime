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
    public auth: boolean = false;

    private urlServer: string = environment.urlServer;
    private _usuario!: Usuario;

    constructor(private http: HttpClient) {}

    get usuario() {
        return { ...this._usuario };
    }

    get isAuth() {
        return this.auth;
    }

    private loadAction = new Subject<string>();
    loadAction$ = this.loadAction.asObservable().pipe(delay(2000));

    alertLoad(value: string) {
        console.log(value);
        this.loadAction.next(value);
    }

    registro(firstname: string, username: string, password: string) {
        const url = `${this.urlServer}/auth/new`;

        const body = { firstname, username, password };

        return this.http.post<AuthResponse>(url, body).pipe(
            tap((resp) => {
                if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                    this.auth = true;
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => of(err.error.msg))
        );
    }

    login(username: string, password: string) {
        const url = `${this.urlServer}/auth`;

        const body = { username, password };

        return this.http.post<AuthResponse>(url, body).pipe(
            tap((resp) => {
                if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                    this.auth = true;
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => of(err.error.msg))
        );
    }

    validarToken() {
        const url = `${this.urlServer}/auth`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        return this.http.get<AuthResponse>(url, { headers }).pipe(
            tap((resp) => {
                if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                    this.auth = true;
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => of(false))
        );
    }

    cambiarPass(oldPassword: string, newPassword1: string, newPassword2: string) {
        const url = `${this.urlServer}/auth/cambiarPass`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        const body = { oldPassword, newPassword1, newPassword2 };

        return this.http.post<any>(url, body, { headers }).pipe(
            tap((resp) => {
                if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                    this.auth = true;
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => of(false))
        );
    }

    cambiarPassRest(newPassword1: string, newPassword2: string) {
        const url = `${this.urlServer}/rest/cambiarPass`;
        const headers = new HttpHeaders({
            'x-rest': localStorage.getItem('x-rest') || '',
        });

        const body = { newPassword1, newPassword2 };

        return this.http.post<any>(url, body, { headers }).pipe(
            tap((resp) => {
                console.log(resp);
                localStorage.setItem('token', resp.token!);
                this.auth = true;
            }),
            map((resp) => resp.ok),
            catchError((err) => of(false))
        );
    }

    public rutasAuth: rutasAuth[] = [
        {
            path: 'browse',
            name: 'Nosotros',
            icon: 'fa-solid fa-house fa-lg',
        },
        {
            path: 'search',
            name: 'Buscar',
            icon: 'fa-solid fa-magnifying-glass fa-lg',
        },
        {
            path: 'account/favoritos',
            name: 'Favoritos',
            icon: 'fa-solid fa-star fa-lg',
        },
        {
            path: 'account',
            name: 'Cuenta',
            icon: 'fa-solid fa-circle-user fa-lg',
        },
    ];
}
