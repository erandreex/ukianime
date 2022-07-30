import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Anime, Animes, Data } from '../../interfaces/anime.interface';

@Component({
    selector: 'app-carrousel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {
    @Input('small') public small: boolean = true;
    @Input('animes') public animes: Data[] = [];
    @Input('title') public title: string = '';

    @ViewChild('slider', { static: false }) slider!: ElementRef;
    @ViewChild('slide_inner', { static: false }) slide_inner!: ElementRef;

    @HostListener('window:click', ['$event']) onHover(event: MouseEvent) {
        const { className } = event.target as Element;
        if (className.toLowerCase() === 'slider') return;
    }

    constructor(private render2: Renderer2) {}

    public get outer(): DOMRect {
        return this.slider.nativeElement.getBoundingClientRect();
    }

    public get inner(): DOMRect {
        return this.slide_inner.nativeElement.getBoundingClientRect();
    }

    checkBoundary() {
        const slide_inner = this.slide_inner.nativeElement;

        const { left } = slide_inner.style;

        if (parseInt(left) > 0) {
            this.render2.setStyle(slide_inner, 'left', '0px');
        } else if (this.outer.right > this.inner.right) {
            this.render2.setStyle(slide_inner, 'left', `-${this.inner.width - this.outer.width}px`);
        }
    }

    moveBtn(value: string) {
        const slide_inner = this.slide_inner.nativeElement;

        let resultado = this.inner.right - 200;

        if (value === 'right') {
            if (this.outer.right > resultado) {
                this.render2.setStyle(slide_inner, 'left', `-${this.inner.width - this.outer.width}px`);
            } else {
                this.render2.setStyle(slide_inner, 'left', `${slide_inner.offsetLeft - 200}px`);
            }
        }
        if (value === 'left') {
            this.render2.setStyle(slide_inner, 'left', `${slide_inner.offsetLeft + 200}px`);
        }
        this.checkBoundary();
    }
}

// NO BORRAR PARA SACAR EL CARROUSEL 1X1

// mouseenter(e: MouseEvent) {
//     const slider = this.slider.nativeElement;

//     this.render2.setStyle(slider, 'cursor', 'pointer');
// }

// mousedown(e: MouseEvent) {
//     const slider = this.slider.nativeElement;
//     const slide_inner = this.slide_inner.nativeElement;

//     this.pressed = true;
//     this.startx = e.offsetX - slide_inner.offsetLeft;

//     this.render2.setStyle(slider, 'cursor', 'grabbing');
//     this.render2.setStyle(slide_inner, 'transition', 'none');
// }

// mouseup(e: MouseEvent) {
//     this.pressed = false;
//     const slider = this.slider.nativeElement;
//     const slide_inner = this.slide_inner.nativeElement;

//     this.render2.setStyle(slider, 'cursor', 'pointer');
//     this.render2.setStyle(slide_inner, 'transition', 'all 0.5s ease');
// }

// mousemove(e: MouseEvent) {
//     if (!this.pressed) return;
//     e.preventDefault();

//     const slide_inner = this.slide_inner.nativeElement;
//     this.x = e.offsetX;

//     this.render2.setStyle(slide_inner, 'transition', 'none');
//     this.render2.setStyle(slide_inner, 'left', `${this.x - this.startx}px`);

//     this.checkBoundary();
// }
