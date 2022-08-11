import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root',
})
export class CheckGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> | boolean {
        if (localStorage.getItem('token')) {
            this.authService.validarToken().subscribe((value) => {
                if (!value) {
                    this.authService.reset();
                }
            });
        }

        return true;
    }
    canLoad(): Observable<boolean> | boolean {
        if (localStorage.getItem('token')) {
            this.authService.validarToken().subscribe((value) => {
                if (!value) {
                    this.authService.reset();
                }
            });
        }

        return true;
    }
}
