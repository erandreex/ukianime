import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root',
})
export class RestAnswerGuard implements CanActivate, CanLoad {
    constructor(private restService: RestService, private router: Router) {}

    canActivate(): Observable<boolean> | boolean {
        return this.restService.checkAnswer().pipe<boolean>(
            tap((valid) => {
                if (!valid) {
                    this.router.navigateByUrl('/restablecer');
                }
            })
        );
    }
    canLoad(): Observable<boolean> | boolean {
        return this.restService.checkAnswer().pipe<boolean>(
            tap((valid) => {
                if (!valid) {
                    this.router.navigateByUrl('/restablecer');
                }
            })
        );
    }
}
