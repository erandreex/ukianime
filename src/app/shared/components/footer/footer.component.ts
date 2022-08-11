import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    @Input('auth') public auth: boolean = false;

    constructor(private authService: AuthService) {}

    get fecha() {
        const hoy = new Date();
        return hoy.toLocaleDateString();
    }
}
