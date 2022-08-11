import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Data } from 'src/app/shared/interfaces/anime.interface';
import { AnimesService } from '../../../shared/services/animes.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
    public animes: Data[] | any = [];

    public mostrar: boolean = false;

    public focus: boolean = false;

    public termino: string = '';

    searchForm: FormGroup = this.fb.group({
        text: ['', [Validators.required]],
    });

    @ViewChild('input') input!: ElementRef<HTMLInputElement>;

    constructor(private fb: FormBuilder, private animesService: AnimesService) {}
    ngOnInit(): void {
        this.focus = true;

        this.searchForm
            .get('text')
            ?.valueChanges.pipe(debounceTime(300))
            .subscribe((value) => {
                this.termino = value;
                this.buscar();
            });
    }

    buscar() {
        const { text } = this.searchForm.value;

        if (text.length == 0) {
            this.animes = [];
            this.mostrar = false;
            return;
        }

        this.animesService.searchAnime(text).subscribe((value) => {
            console.log(value);
            if (value.length == 0) {
                this.mostrar = true;
                return;
            }
            this.animes = value;
            this.mostrar = false;
        });
    }

    ngAfterViewInit(): void {
        this.input.nativeElement.focus();
    }
}
