import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { concatAll, forkJoin, map, Observable, pluck, switchAll, toArray } from 'rxjs';

import { Animes, Data } from '../interfaces/anime.interface';

@Injectable({
    providedIn: 'root',
})
export class AnimesService {
    private apiUrl: string = 'https://kitsu.io/api/edge';
    private limitPerRequest: string = 'page[limit]=20';

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

    trendings(): Observable<Data[]> {
        const url1 = `${this.apiUrl}/trending/anime?page[offset]=0`;

        return this.http.get<Animes>(url1, { params: this.httpParamsFeed }).pipe(map((resp) => resp.data));
    }

    animesPorCategoria(p_categories: string): Observable<Data[]> {
        const url1 = `${this.apiUrl}/anime?page[offset]=0&${this.limitPerRequest}&filter[categories]=${p_categories}&filter[subtype]=TV`;
        const url2 = `${this.apiUrl}/anime?page[offset]=20&${this.limitPerRequest}&filter[categories]=${p_categories}&filter[subtype]=TV`;
        const url3 = `${this.apiUrl}/anime?page[offset]=40&${this.limitPerRequest}&filter[categories]=${p_categories}&filter[subtype]=TV`;

        const joined$ = forkJoin([
            this.http.get<Animes>(url1, { params: this.httpParamsFeed }),
            this.http.get<Animes>(url2, { params: this.httpParamsFeed }),
            this.http.get<Animes>(url3, { params: this.httpParamsFeed }),
        ]).pipe(concatAll(), pluck('data'), switchAll(), toArray());
        return joined$;
    }

    animesPorGenero(p_genres: string): Observable<Data[]> {
        const url1 = `${this.apiUrl}/anime?page[offset]=0&${this.limitPerRequest}&filter[categories]=${p_genres}&filter[subtype]=TV`;
        const url2 = `${this.apiUrl}/anime?page[offset]=20&${this.limitPerRequest}&filter[categories]=${p_genres}&filter[subtype]=TV`;
        const url3 = `${this.apiUrl}/anime?page[offset]=40&${this.limitPerRequest}&filter[categories]=${p_genres}&filter[subtype]=TV`;

        const joined$ = forkJoin([
            this.http.get<Animes>(url1, { params: this.httpParamsFeed }),
            this.http.get<Animes>(url2, { params: this.httpParamsFeed }),
            this.http.get<Animes>(url3, { params: this.httpParamsFeed }),
        ]).pipe(concatAll(), pluck('data'), switchAll(), toArray());
        return joined$;
    }

    //************************************************************************************************ *

    searchAnime(text: string): Observable<Data[]> {
        const url = `${this.apiUrl}/anime?${text}&${this.limitPerRequest}`;

        return this.http.get<Animes>(url, { params: this.httpParamsFeed }).pipe(pluck('data'));
    }
}
