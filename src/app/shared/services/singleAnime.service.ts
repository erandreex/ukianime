import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, pluck } from 'rxjs';
import { Anime, Animes, Data } from '../interfaces/anime.interface';
import { Categoria, Categories } from '../interfaces/categorias.interface';
import { Generos, Genres } from '../interfaces/generos.interface';

@Injectable({
    providedIn: 'root',
})
export class SingleAimeServices {
    private apiUrl: string = 'https://kitsu.io/api/edge';
    private limitPerRequest: string = 'page[limit]=20';

    public fieldsSingle: string[] = [
        'id',
        'canonicalTitle',
        'posterImage',
        'averageRating',
        'popularityRank',
        'ratingRank',
        'description',
        'status',
        'ageRatingGuide',
        'ageRating',
        'startDate',
        'endDate',
        'episodeCount',
        'genres',
        'categories',
        'coverImage',
        'showType',
    ];

    public fieldsCategorias: string[] = ['title'];

    public fieldsGeneros: string[] = ['name'];

    public fields: string = '';

    get httpParamsCategorias() {
        this.fields = '';
        let varw = 1;
        this.fieldsCategorias.forEach((e) => {
            if (varw == 1) {
                this.fields = e;
            }
            this.fields += ',' + e;
            varw++;
        });

        return new HttpParams().set(`fields[categories]`, this.fields);
    }

    get httpParamsGeneros() {
        this.fields = '';
        let varw = 1;
        this.fieldsGeneros.forEach((e) => {
            if (varw == 1) {
                this.fields = e;
            }
            this.fields += ',' + e;
            varw++;
        });

        return new HttpParams().set(`fields[genres]`, this.fields);
    }

    get httpParamsSingle() {
        this.fields = '';
        let varw = 1;
        this.fieldsSingle.forEach((e) => {
            if (varw == 1) {
                this.fields = e;
            }
            this.fields += ',' + e;
            varw++;
        });

        return new HttpParams().set(`fields[anime]`, this.fields);
    }

    constructor(private http: HttpClient) {}

    // ***********************************************************************************

    animesPorId(id: string): Observable<Data> {
        const url = `${this.apiUrl}/anime/${id}?${this.limitPerRequest}`;

        return this.http.get<Anime>(url, { params: this.httpParamsSingle }).pipe(pluck('data'));
    }

    generosAnime(id: string): Observable<Generos[]> {
        const url = `${this.apiUrl}/anime/${id}/genres?page[limit]=10`;

        return this.http.get<Genres>(url, { params: this.httpParamsGeneros }).pipe(pluck('data'));
    }

    categoriasAnime(id: string): Observable<Categoria[]> {
        const url = `${this.apiUrl}/anime/${id}/categories?page[limit]=10`;

        return this.http.get<Categories>(url, { params: this.httpParamsCategorias }).pipe(pluck('data'));
    }
}
