import { Component } from '@angular/core';

import { SharedService } from '../../../shared/shared.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
})
export class AccountComponent {
    constructor(private sharedService: SharedService) {
        this.sharedService.alertBackground('fondo-solid');
    }
}
