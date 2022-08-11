import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../../../rest.service';
import { debounceTime, interval, delay } from 'rxjs';

@Component({
    selector: 'app-rest1',
    templateUrl: './rest1.component.html',
    styleUrls: ['./rest1.component.css'],
})
export class Rest1Component implements OnInit {
    public load: boolean = false;
    public errors: string[] = [];

    rest1Form: FormGroup = this.fb.group({
        username: ['', Validators.required, Validators.minLength(1)],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private restService: RestService,
        private activatedRoute: ActivatedRoute
    ) {
        localStorage.removeItem('x-rest');
        localStorage.removeItem('token');
    }

    ngOnInit(): void {}

    submit() {
        const { username } = this.rest1Form.value;
        this.errors = [];
        this.load = true;
        this.restService
            .username(username)
            .pipe(delay(1000))
            .subscribe((resp) => {
                if (resp === true) {
                    this.router.navigate([username], { relativeTo: this.activatedRoute });
                } else {
                    this.load = false;
                    this.errors = resp.errors;
                }
            });
    }

    ngOnDestroy(): void {
        this.load = false;
    }
}
