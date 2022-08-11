import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';
import { delay } from 'rxjs';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
    public load: boolean = false;

    public errors: string[] = [];

    registroForm: FormGroup = this.fb.group({
        firstname: ['', [Validators.required, Validators.minLength(1)]],
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    registro() {
        this.load = true;
        this.errors = [];

        const { firstname, username, password } = this.registroForm.value;

        this.authService
            .registro(firstname, username, password)
            .pipe(delay(500))
            .subscribe((resp) => {
                if (resp === true) {
                    this.router.navigateByUrl('/browse');
                } else {
                    console.log(resp);
                    this.load = false;
                    this.errors = resp.errors;
                }
            });
    }

    ngOnDestroy(): void {
        this.load = false;
    }
}
