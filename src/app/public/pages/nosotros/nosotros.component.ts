import { Component } from '@angular/core';
import { Owner } from 'src/app/shared/interfaces/owner.interface';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
    selector: 'app-nosotros',
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {
    constructor(private sharedService: SharedService) {
        this.sharedService.alertBackground('fondo-solid');
    }

    protected owners: Owner[] = [
        {
            name: 'Francisco Perez',
            role: 'Desarrollador',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            pathImage: '../../../../assets/owners/Francisco.png',
        },
        {
            name: 'Ernesto Solís',
            role: 'Desarrollador',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            pathImage: '../../../../assets/owners/Ernesto.png',
        },
        {
            name: 'Alejandro Andrade',
            role: 'Desarrollador',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            pathImage: '../../../../assets/owners/Andrade.png',
        },
        {
            name: 'Melitón Rodriguez',
            role: 'Diseñador',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            pathImage: '../../../../assets/owners/Meliton.png',
        },
        {
            name: 'Juan Huerta',
            role: 'Diseñador',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            pathImage: '../../../../assets/owners/Huerta.png',
        },
        {
            name: 'Alfredo Castillo',
            role: 'Diseñador',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            pathImage: '../../../../assets/owners/Alfredo.png',
        },
    ];

    ngOnDestroy(): void {
        this.sharedService.alertBackground('fondo');
    }
}
