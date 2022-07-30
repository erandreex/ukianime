import { Component, Input } from '@angular/core';
import { rutas, SharedService } from '../../shared.service';
import { rutasAuth, AuthService } from '../../../auth/auth.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input('auth') public auth: boolean = true;
    public rutas: rutas[] = [];
    public rutasAuth: rutasAuth[] = [];

    constructor(
        private sharedService: SharedService,
        private authService: AuthService,
        private NavigationService: NavigationService
    ) {
        this.rutas = this.sharedService.rutas;
    }

    back() {
        this.NavigationService.back();
    }

    sidenav(action: string) {
        this.sharedService.alertSidenav(action);
    }

    modal(action: string) {
        this.sharedService.alertModal(action);
    }
}
