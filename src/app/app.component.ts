import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { StylesService, styles } from './shared/styles.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'ukianime';

    public styles: string[] = [];

    private subscriptionStyles!: Subscription;

    constructor(private stylesService: StylesService) {
        this.addStyles(this.stylesService.styleLogic);

        this.subscriptionStyles = this.stylesService.changeStyles$.subscribe((styles) => {
            this.addStyles(styles);
        });
    }

    addStyles(styles: styles) {
        this.styles = Object.values(styles);
    }

    ngOnDestroy(): void {
        this.subscriptionStyles.unsubscribe();
    }
}
