import { Component, Input } from '@angular/core';
import { AuthService, rutasAuth } from '../../../auth/auth.service';

@Component({
    selector: 'app-bottom-nav',
    templateUrl: './bottom-nav.component.html',
    styleUrls: ['./bottom-nav.component.css'],
})
export class BottomNavComponent {
    public rutasAuth: rutasAuth[] = [];
    @Input('auth') public auth: boolean = false;

    constructor(private authService: AuthService) {
        this.rutasAuth = this.authService.rutasAuth;
    }
}
