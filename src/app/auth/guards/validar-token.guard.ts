import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root',
})
export class ValidarTokenGuard implements CanActivate, CanLoad, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> | boolean {
        return this.authService.validarToken().pipe<boolean>(
            tap((valid) => {
                if (!valid) {
                    localStorage.removeItem('token');

                    this.router.navigateByUrl('/');
                }
            })
        );
    }
    canLoad(): Observable<boolean> | boolean {
        return this.authService.validarToken().pipe<boolean>(
            tap((valid) => {
                if (!valid) {
                    localStorage.removeItem('token');

                    this.router.navigateByUrl('/');
                }
            })
        );
    }

    canActivateChild(): Observable<boolean> | boolean {
        return this.authService.validarToken().pipe<boolean>(
            tap((valid) => {
                if (!valid) {
                    localStorage.removeItem('token');

                    this.router.navigateByUrl('/');
                }
            })
        );
    }
}
