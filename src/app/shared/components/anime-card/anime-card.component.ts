import { Component, Input, OnDestroy, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../interfaces/anime.interface';
import { SingleAimeServices } from '../../services/singleAnime.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../../auth/user.service';

@Component({
    selector: 'app-anime-card',
    templateUrl: './anime-card.component.html',
    styleUrls: ['./anime-card.component.css'],
})
export class AnimeCardComponent implements OnInit, OnDestroy {
    @Input('height') height: string = '100%';
    @Input('width') width: string = '100%';
    @Input('anime') anime: Data | null = null;

    @Input('anime_id') anime_id: string = '';

    public viewImage: boolean = false;
    public browse: boolean = false;

    public subscription!: Subscription;

    constructor(
        private singleAimeServices: SingleAimeServices,
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        if (!this.router.url.includes('favoritos')) {
            this.browse = true;
            return;
        }

        this.subscription = this.singleAimeServices.animesPorId(this.anime_id).subscribe((value) => {
            this.anime = value;
        });
    }

    @ViewChild('lImage') lImage!: ElementRef;

    load() {
        setTimeout(() => {
            this.viewImage = true;
        }, 500);
    }

    ngOnDestroy(): void {
        if (this.browse) {
            return;
        }
        this.subscription.unsubscribe();
    }

    addRemoveFavorite(anime_id: string) {
        this.userService.addRemoveFavorite(anime_id).subscribe((value) => {});
    }
}
