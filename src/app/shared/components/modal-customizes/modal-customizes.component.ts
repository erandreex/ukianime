import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { SharedService } from '../../shared.service';
import { styles, stylesAllowedOptions, StylesService } from '../../styles.service';

@Component({
    selector: 'app-modal-customizes',
    templateUrl: './modal-customizes.component.html',
    styleUrls: ['./modal-customizes.component.css'],
})
export class ModalCustomizesComponent {
    public estado: boolean = false;
    public subscription!: Subscription;

    public optionsSelected: styles = {
        theme: '',
        image: '',
        color: '',
        size: '',
    };

    public allStyles: stylesAllowedOptions | null = null;

    constructor(private stylesService: StylesService, private sharedService: SharedService) {
        this.allStyles = this.stylesService.allowedStyles;
        this.optionsSelected = this.stylesService.styleLogic;

        this.subscription = this.sharedService.modalAction$.subscribe((value) => {
            this.modal(value);
        });
    }

    modal(value: string) {
        value === 'abrir' ? (this.estado = true) : (this.estado = false);
    }

    selectStyle(style: string, option: string) {
        this.optionsSelected = this.stylesService.active(style, option);

        return;
    }
}
