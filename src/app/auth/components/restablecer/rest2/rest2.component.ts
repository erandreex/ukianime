import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/auth/rest.service';
import { delay } from 'rxjs';

@Component({
    selector: 'app-rest2',
    templateUrl: './rest2.component.html',
    styleUrls: ['./rest2.component.css'],
})
export class Rest2Component implements OnInit {
    public pregunta: string = '';
    public load: boolean = false;

    rest2Form: FormGroup = this.fb.group({
        answer: ['', [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private restService: RestService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.pregunta = this.restService.question;
    }

    submit() {
        const { answer } = this.rest2Form.value;
        this.load = true;

        this.restService
            .answer(answer)
            .pipe(delay(1000))
            .subscribe((ok) => {
                if (ok === true) {
                    this.router.navigate(['pass'], { relativeTo: this.activatedRoute });
                } else {
                    this.load = false;

                    console.log('Lanzar error');
                }
            });
    }

    ngOnDestroy(): void {
        this.load = false;
    }
}
