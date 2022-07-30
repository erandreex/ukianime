import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, forkJoin } from 'rxjs';

import { SingleAimeServices } from 'src/app/shared/services/singleAnime.service';

import { Data } from 'src/app/shared/interfaces/anime.interface';
import { Categoria } from 'src/app/shared/interfaces/categorias.interface';
import { Generos } from 'src/app/shared/interfaces/generos.interface';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
    public anime!: Data;
    public categorias!: Categoria[];
    public generos!: Generos[];

    constructor(private singleAimeServices: SingleAimeServices, private activatedRoute: ActivatedRoute) {}

    aqui(value: string) {
        console.log(value);
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) =>
                    forkJoin([
                        this.singleAimeServices.animesPorId(id),
                        this.singleAimeServices.categoriasAnime(id),
                        this.singleAimeServices.generosAnime(id),
                    ])
                )
            )
            .subscribe((value) => {
                this.anime = value[0];
                this.categorias = value[1];
                this.generos = value[2];

                console.log(this.generos);
            });
    }
}
