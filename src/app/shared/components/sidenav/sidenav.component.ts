import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { rutas, SharedService } from '../../shared.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    public backgroundO: boolean = false;
    public rutas: rutas[] = [];

    public sizeOpen: string = '0px';
    private subscription!: Subscription;

    constructor(private sharedService: SharedService, private router: Router) {
        this.subscription = this.sharedService.sidenavAction$.subscribe((value) => {
            this.action(value);
        });

        this.rutas = this.sharedService.rutas;

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.action('cerrar');
            }
        });
    }

    action(value: string) {
        if (value === 'abrir') {
            this.sizeOpen = '250px';
            this.backgroundO = true;
        }
        if (value === 'cerrar') {
            this.sizeOpen = '0px';
            this.backgroundO = false;
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
