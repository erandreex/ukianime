import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public auth: boolean = true;

    private urlServer: string = environment.urlServer;

    constructor(private http: HttpClient) {}

    infoUser() {
        const url = `${this.urlServer}/user/info`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        return this.http.get<any>(url, { headers }).pipe(
            map((resp) => {
                console.log(resp);
                localStorage.setItem('token', resp.token!);
                return resp.user;
            }),
            catchError((err) => of(false))
        );
    }

    updateInfo(firstname: string, lastname: string) {
        const url = `http://localhost:8080/api/v1/user/edit`;

        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        const body = { firstname, lastname };

        return this.http.post<any>(url, body, { headers }).pipe(
            tap((resp) => {
                if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                }
            }),
            map((resp) => resp.ok),
            catchError((err) => of(err.error))
        );
    }

    questions(question: string, answer: string) {
        const url = `${this.urlServer}/user/preguntas`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        const body = { question, answer };

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                return resp;
            }),
            catchError((err) => of(false))
        );
    }

    listQuestion(question: string) {
        const url = `${this.urlServer}/user/pregunta`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        const body = { question };

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                return resp;
            }),
            catchError((err) => of(false))
        );
    }

    addRemoveFavorite(anime: string) {
        const url = `${this.urlServer}/favorite/addRemove`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        const body = { anime };

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                return resp;
            }),
            catchError((err) => of(false))
        );
    }

    listFavorites(page: number) {
        const url = `${this.urlServer}/favorite/list?page=${page}`;
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        return this.http.get<any>(url, { headers }).pipe(
            map((resp) => {
                return resp;
            }),
            catchError((err) => of(false))
        );
    }

    changeStatus(password: string) {
        const url = `${this.urlServer}/user/changeStatus`;
        const body = { password };
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                return resp.ok;
            }),
            catchError((err) => of(err.error))
        );
    }

    existFavorite(anime: string) {
        const url = `${this.urlServer}/favorite/exist`;
        const body = { anime };
        const headers = new HttpHeaders({
            'x-token': localStorage.getItem('token') || '',
        });

        return this.http.post<any>(url, body, { headers }).pipe(
            map((resp) => {
                return resp.ok;
            }),
            catchError((err) => of(false))
        );
    }
}
