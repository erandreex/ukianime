import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    public load: boolean = true;

    public subscription!: Subscription;
    public subscription2!: Subscription;

    public background: string = 'fondo';

    constructor(
        private sharedService: SharedService,
        private authService: AuthService,
        private router: Router,
        private cdRef: ChangeDetectorRef
    ) {
        this.subscription2 = this.router.events.subscribe((value) => {
            if (value instanceof NavigationStart) {
                this.load = true;
            }

            if (value instanceof NavigationEnd) {
                this.load = false;
            }
        });
    }

    ngOnInit(): void {
        this.subscription = this.sharedService.backgroundAction$.pipe(delay(100)).subscribe((value) => {
            this.background = value;
        });
    }

    ngAfterViewInit(): void {
        this.cdRef.detectChanges();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }

    get auth() {
        return this.authService.auth;
    }

    get user() {
        return this.authService.user;
    }
}
