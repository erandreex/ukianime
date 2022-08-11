import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Subscription, take, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
    constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {}

    public subscription!: Subscription;

    public totalFavoritos: string = '';

    public page: number = 1;

    public hasNextPage: boolean = false;
    public hasPreviousPage: boolean = false;

    public load: boolean = true;

    public animes: string[] | any = [];

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(switchMap(({ page }) => this.userService.listFavorites(page)))
            .subscribe((value) => {
                console.log(value);
                this.load = false;
                this.animes = value.lista;
                this.hasPreviousPage = value.hasPreviousPage;
                this.hasNextPage = value.hasNextPage;
                this.page = value.paginaActual;
            });
    }

    mover(action: string) {
        if (action === 'sig') {
            this.router.navigateByUrl(`/favoritos/${this.page + 1}`);
        } else {
            this.router.navigateByUrl(`/favoritos/${this.page - 1}`);
        }
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
    }
}
