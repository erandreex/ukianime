import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface rutas {
    path: string;
    name: string;
}

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    constructor() {}

    public rutas: rutas[] = [
        {
            path: 'nosotros',
            name: 'Nosotros',
        },
        {
            path: 'browse',
            name: 'Browse',
        },
        {
            path: 'tecnologias',
            name: 'Tecnologias',
        },
    ];

    private modalAction = new Subject<any>();
    modalAction$ = this.modalAction.asObservable();

    private sidenavAction = new Subject<any>();
    sidenavAction$ = this.sidenavAction.asObservable();

    private backgroundAction = new Subject<any>();
    backgroundAction$ = this.backgroundAction.asObservable();

    alertModal(action: string) {
        this.modalAction.next(action);
    }

    alertSidenav(action: string) {
        this.sidenavAction.next(action);
    }

    alertBackground(action: string) {
        this.backgroundAction.next(action);
    }
}
