import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
    public breadcrumbs: string[] = [];

    constructor(private router: Router) {
        this.breadcrumbs = this.router.url.split('/');
        this.breadcrumbs.shift();
    }

    ngOnInit(): void {
        this.router.events.subscribe((value) => {
            if (value instanceof NavigationEnd) {
                this.breadcrumbs = value.url.split('/');
                this.breadcrumbs.shift();
            }
        });
    }
}
