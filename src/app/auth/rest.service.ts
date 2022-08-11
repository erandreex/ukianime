import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, delay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RestService {
    private urlServer: string = environment.urlServer;

    constructor(private http: HttpClient) {}

    public pregunta: string = '';

    get question() {
        return this.pregunta;
    }

    username(username: string) {
        const url = `${this.urlServer}/rest`;
        const body = { username };

        return this.http.post<any>(url, body).pipe(
            map((resp) => {
                localStorage.removeItem('x-token');
                this.pregunta = resp.question;
                localStorage.setItem('x-rest', resp.token!);
                return resp.ok;
            }),
            catchError((err) => of(err.error))
        );
    }

    checkUsername() {
        const url = `${this.urlServer}/rest`;

        const headers = new HttpHeaders({
            'x-rest': localStorage.getItem('x-rest') || '',
        });

        return this.http.get<any>(url, { headers }).pipe(
            map((resp) => {
                this.pregunta = resp.question;
                return resp.ok;
            }),
            catchError((err) => of(false))
        );
    }

    answer(answer: string) {
        const url = `${this.urlServer}/rest/answer`;

        const headers = new HttpHeaders({
            'x-rest': localStorage.getItem('x-rest') || '',
        });

        const body = { answer };

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                localStorage.setItem('x-rest', resp.token!);
                return resp.ok;
            }),
            catchError((err) => of(err.error))
        );
    }

    checkAnswer() {
        const url = `${this.urlServer}/rest/answer`;

        const headers = new HttpHeaders({
            'x-rest': localStorage.getItem('x-rest') || '',
        });

        return this.http.get<any>(url, { headers }).pipe(
            map((resp) => {
                return resp.ok;
            }),
            catchError((err) => of(false))
        );
    }

    cambiarPass(newPassword1: string, newPassword2: string) {
        const url = `${this.urlServer}/rest/cambiarPass`;

        const headers = new HttpHeaders({
            'x-rest': localStorage.getItem('x-rest') || '',
        });

        const body = { newPassword1, newPassword2 };

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                localStorage.setItem('token', resp.token!);
                return resp.ok;
            }),
            catchError((err) => of(false))
        );
    }
}
