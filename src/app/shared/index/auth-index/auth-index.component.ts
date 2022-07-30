import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-auth-index',
    templateUrl: './auth-index.component.html',
    styleUrls: ['./auth-index.component.css'],
})
export class AuthIndexComponent {
    public title: string = '';

    constructor(private router: Router) {
        this.title = this.router.url.includes('login') ? 'Iniciar sesión' : 'Registrase';

        this.router.events.subscribe((evt: any) => {
            if (evt instanceof NavigationStart) {
                if (evt.url.includes('login')) {
                    this.title = 'Iniciar sesión';
                } else {
                    this.title = 'Registrarse';
                }
            }
        });
    }
}
