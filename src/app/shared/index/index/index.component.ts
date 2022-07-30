import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
    public auth: boolean = false;
    public subscription!: Subscription;
    public subscription2!: Subscription;

    public background: string = 'fondo-uki';

    constructor(private sharedService: SharedService, private authService: AuthService) {
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
        this.subscription.unsubscribe;
    }
}
