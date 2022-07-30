import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
    //
    public elarray: number[] = [];
    public max_items_visible: number = 5;

    // Custom
    public max_pages: number = 10;
    public currentPage: number = 2;
    public hasPrevious: boolean = false;
    public hasNext: boolean = true;

    constructor() {
        this.verificar(this.currentPage);
    }

    ngOnInit(): void {}

    verificar(page: number) {
        this.elarray.push(page);

        if (page - 1 > 0) {
            this.elarray.unshift(page - 1);
            if (page - 2 > 0) {
                this.elarray.unshift(page - 2);
            }
        }

        if (page + 1 <= this.max_pages) {
            this.elarray.push(page + 1);
            if (page + 2 <= this.max_pages) {
                this.elarray.push(page + 2);
            }
        }
        this.verificar2();
    }

    verificar2() {
        if (this.elarray.length == 5) {
            return;
        }

        console.log(this.elarray);

        if (this.elarray[0] == 1) {
            if (this.elarray.length + 2 < this.max_pages) {
                this.elarray.push(this.elarray[this.elarray.length - 1] + 1);
                this.elarray.push(this.elarray[this.elarray.length - 1] + 1);
            }
        }

        if (this.elarray[0] == 2) {
            if (this.elarray.length + 1 < this.max_pages) {
                this.elarray.push(this.elarray[this.elarray.length - 1] + 1);
            }
        }
    }
}
