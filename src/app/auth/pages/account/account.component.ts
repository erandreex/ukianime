import { Component } from '@angular/core';

import { SharedService } from '../../../shared/shared.service';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
})
export class AccountComponent {
    constructor(private sharedService: SharedService, private authService: AuthService) {
        // this.authService.alertLoad('close');
        // this.sharedService.alertBackground('fondo-solid');
    }
}
