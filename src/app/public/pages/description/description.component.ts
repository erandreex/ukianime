import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, forkJoin } from 'rxjs';

import { SingleAimeServices } from 'src/app/shared/services/singleAnime.service';

import { Data } from 'src/app/shared/interfaces/anime.interface';
import { Categoria } from 'src/app/shared/interfaces/categorias.interface';
import { Generos } from 'src/app/shared/interfaces/generos.interface';
import { UserService } from '../../../auth/user.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
    public anime!: Data;
    public categorias!: Categoria[];
    public generos!: Generos[];
    public viewImage: boolean = false;

    public favorito: boolean = false;

    constructor(
        private singleAimeServices: SingleAimeServices,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private authService: AuthService
    ) {}

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
                        this.userService.existFavorite(id),
                    ])
                )
            )
            .subscribe((value) => {
                this.anime = value[0];
                this.categorias = value[1];
                this.generos = value[2];
                this.favorito = value[3];
            });
    }

    load() {
        setTimeout(() => {
            this.viewImage = true;
        }, 500);
    }
    addRemoveFavorite(anime_id: string) {
        this.userService.addRemoveFavorite(anime_id).subscribe((value) => {
            console.log(value);
        });
    }

    get auth() {
        return this.authService.auth;
    }
}
