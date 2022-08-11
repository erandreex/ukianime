import { Component, Input } from '@angular/core';
import { rutas, SharedService } from '../../shared.service';
import { rutasAuth, AuthService } from '../../../auth/auth.service';
import { NavigationService } from '../../services/navigation.service';
import { Usuario } from 'src/app/auth/interfaces/auth.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input('auth') public auth: boolean = true;
    @Input('user') public user: Usuario | null = null;

    public rutas: rutas[] = [];
    public rutasAuth: rutasAuth[] = [];
    public user1!: Usuario;

    constructor(
        private sharedService: SharedService,
        private NavigationService: NavigationService,
        private authService: AuthService
    ) {
        this.rutas = this.sharedService.rutas;
        this.rutasAuth = this.authService.maxScreen;
    }

    back() {
        this.NavigationService.back();
    }

    sidenav(action: string) {
        this.sharedService.alertSidenav(action);
    }
}
