import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Subscription, take } from 'rxjs';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
    constructor(private userService: UserService) {}

    public subscription!: Subscription;

    public animes: string[] | any = [];

    ngOnInit(): void {
        this.subscription = this.userService
            .listFavorites(1)
            .pipe(take(1))
            .subscribe((value) => {
                this.animes = value.lista;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
