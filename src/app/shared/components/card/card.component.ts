import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../interfaces/anime.interface';

interface anime {
    name: string;
    urlImage: string;
    path: string;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    public auth: boolean = false;
    @Input('height') height: string = '100%';
    @Input('width') width: string = '100%';
    @Input('anime') anime: Data | null = null;

    constructor() {}

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.auth = true;
        }
    }

    aqui(value: string) {
        console.log('aqui');
    }
}
