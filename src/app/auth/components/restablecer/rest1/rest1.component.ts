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

    rest1Form: FormGroup = this.fb.group({
        username: ['', [Validators.required]],
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
        this.load = true;
        this.restService
            .username(username)
            .pipe(delay(1000))
            .subscribe((ok) => {
                if (ok === true) {
                    this.router.navigate([username], { relativeTo: this.activatedRoute });
                } else {
                    this.load = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.load = false;
    }
}
