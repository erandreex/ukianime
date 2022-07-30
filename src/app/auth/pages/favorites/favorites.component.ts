import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
    constructor() {}

    public animes: any = [
        {
            urlImage: '../../../../assets/viewtiful.jpg',
            name: 'Viewtiful Joe',
            path: '1',
        },
        {
            urlImage: '../../../../assets/one.jpg',
            name: 'One Outs',
            path: '2',
        },
        {
            urlImage: '../../../../assets/shingeki.jpg',
            name: 'Shingeki No Kyojin',
            path: '3',
        },
        {
            urlImage: '../../../../assets/dragonball.jpg',
            name: 'Dragon Ball Super',
            path: '4',
        },
        {
            urlImage: '../../../../assets/narutoShippuden.jpg',
            name: 'Naruto Shippuden',
            path: '5',
        },
        {
            urlImage: '../../../../assets/yugioh.jpg',
            name: 'Yugioh',
            path: '6',
        },
        {
            urlImage: '../../../../assets/pokemon.jfif',
            name: 'Pokemon',
            path: '7',
        },
    ];

    ngOnInit(): void {}
}
