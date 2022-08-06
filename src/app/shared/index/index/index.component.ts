import { Component, OnInit } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { SharedService } from '../../shared.service';
import { AuthService } from '../../../auth/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
    public auth: boolean = false;
    public load: boolean = true;

    public subscription!: Subscription;
    public subscription2!: Subscription;

    public background: string = 'fondo';

    constructor(private sharedService: SharedService, private authService: AuthService, private router: Router) {
        this.subscription2 = this.router.events.subscribe((value) => {
            if (value instanceof NavigationStart) {
                this.load = true;
            }

            if (value instanceof NavigationEnd) {
                this.load = false;
            }
        });

        this.auth = this.authService.auth;

        this.subscription = this.sharedService.backgroundAction$.subscribe((value) => {
            this.background = value;
        });
    }

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.auth = true;
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
