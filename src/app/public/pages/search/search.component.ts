import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
    searchForm: FormGroup = this.fb.group({
        text: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
        this.searchForm
            .get('text')
            ?.valueChanges.pipe(debounceTime(500))
            .subscribe((value) => {
                console.log(value);
            });
    }

    buscar() {
        const { text } = this.searchForm.value;
    }
}
