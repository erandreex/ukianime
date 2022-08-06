import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, concatAll, forkJoin, map, Observable, of, pluck, switchAll, take, toArray, tap } from 'rxjs';

import { Animes, Data } from '../interfaces/anime.interface';

@Injectable({
    providedIn: 'root',
})
export class AnimesService {
    private apiUrl: string = 'https://kitsu.io/api/edge';

    public fieldsMultiple: string[] = [
        'id',
        'canonicalTitle',
        'posterImage',
        'averageRating',
        'popularityRank',
        'ratingRank',
    ];

    public fields: string = '';

    get httpParamsFeed() {
        this.fields = '';
        let varw = 1;
        this.fieldsMultiple.forEach((e) => {
            if (varw == 1) {
                this.fields = e;
            }
            this.fields += ',' + e;
            varw++;
        });

        return new HttpParams().set(`fields[anime]`, this.fields);
    }

    constructor(private http: HttpClient) {}

    trendings(): Observable<Data[] | any> {
        const url1 = `${this.apiUrl}/trending/anime?page[offset]=0`;

        return this.http.get<Animes>(url1, { params: this.httpParamsFeed }).pipe(
            take(1),
            map((resp) => resp.data),
            catchError((err) => of(err))
        );
    }

    animesPorCategoriaGenero(p_value: string): Observable<Data[] | any> {
        const url = `${this.apiUrl}/anime?page[offset]=0&page[limit]=20&filter[subtype]=TV&filter[categories]=${p_value}`;

        return forkJoin([this.http.get<Animes>(url, { params: this.httpParamsFeed })]).pipe(
            take(1),
            concatAll(),
            pluck('data'),
            switchAll(),
            toArray(),
            catchError((err) => of(err))
        );
    }

    //************************************************************************************************ *

    searchAnime(text: string): Observable<Data[] | any> {
        const url = `${this.apiUrl}/anime?filter[text]=${text}&page[limit]=20`;

        return this.http.get<Animes>(url, { params: this.httpParamsFeed }).pipe(take(1), pluck('data'));
    }
}
