import { Component, Input, OnInit } from '@angular/core';
import { Owner } from '../../interfaces/owner.interface';

@Component({
    selector: 'app-profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
    @Input('owner') owner!: Owner | null;

    constructor() {}

    ngOnInit(): void {}
}
