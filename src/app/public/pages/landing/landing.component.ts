import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../../../shared/services/animes.service';
import { Data } from '../../../shared/interfaces/anime.interface';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
    public trendings: Data[] | any = [];
    public error1: boolean = false;

    constructor(private animesService: AnimesService) {}

    ngOnInit(): void {
        this.trendings = this.animesService.trendings().subscribe(
            (data) => {
                if (data.error) {
                    this.error1 = true;
                    return;
                }
                this.trendings = data;
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
