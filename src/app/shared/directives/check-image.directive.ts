import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { fromEvent, delay, Observable, Subject } from 'rxjs';

@Directive({
    selector: '[appCheckImage]',
})
export class CheckImageDirective {
    public loader: string = '../../../assets/img-loader.svg';
    public cargado: boolean = false;

    private readonly load$ = new Subject<any>();

    constructor(private renderer: Renderer2, private el: ElementRef) {
        // this.renderer.setAttribute(this.el.nativeElement, 'src', this.loader);
    }

    @HostListener('load', ['$event']) handleClick(load: any) {
        this.load$.next(load);
    }

    ngOnInit(): void {
        this.load$.pipe(delay(1000)).subscribe((value) => {
            console.log(value);
        });
    }
}
