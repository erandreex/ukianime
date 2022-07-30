import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/shared/interfaces/anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
    public animes: Data[] = [];

    public trendings: Data[] = [];

    public action: Data[] = [];
    public vampire: Data[] = [];
    public adventure: Data[] = [];

    public mistery: Data[] = [];
    public supernatural: Data[] = [];
    public drama: Data[] = [];

    constructor(private animesService: AnimesService) {}

    ngOnInit(): void {
        this.trending();
        this.categories();
        this.genres();
    }

    trending() {
        this.animesService.trendings().subscribe((data) => {
            this.trendings = data;
        });
    }

    categories() {
        this.animesService.animesPorCategoria('Action').subscribe((data) => {
            this.action = data;
        });

        this.animesService.animesPorCategoria('Vampire').subscribe((data) => {
            this.vampire = data;
        });

        this.animesService.animesPorCategoria('Adventure').subscribe((data) => {
            this.adventure = data;
        });
    }

    genres() {
        this.animesService.animesPorGenero('Mystery').subscribe((data) => {
            this.mistery = data;
        });

        this.animesService.animesPorGenero('Supernatural').subscribe((data) => {
            this.supernatural = data;
        });

        this.animesService.animesPorGenero('drama').subscribe((data) => {
            this.drama = data;
        });
    }
}
