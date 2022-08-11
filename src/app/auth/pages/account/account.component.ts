import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit, OnDestroy {
    public opciones: boolean = true;
    public screenWidth: number = 0;
    public maxWidthOption: number = 650;
    constructor(
        private sharedService: SharedService,
        private cdRef: ChangeDetectorRef,
        private router: Router,
        private authService: AuthService
    ) {
        this.sharedService.alertBackground('fondo-solid');
        this.screenWidth = window.innerWidth;
        this.sharedService.accountAction$.subscribe((value) => {
            if (value === 'open') {
                this.opciones = false;
            }
            if (value === 'close') {
                this.opciones = true;
            }
        });
    }
    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.cdRef.detectChanges();
    }

    ngOnDestroy(): void {
        // this.sharedService.alertBackground('fondo');
    }

    logout() {
        this.authService.reset();
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }

    get user() {
        return this.authService.user;
    }
}
