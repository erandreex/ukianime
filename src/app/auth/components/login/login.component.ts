import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';
import { delay } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    host: {
        class: 'app-login',
    },
})
export class LoginComponent {
    public load: boolean = false;
    public errors: string[] = [];

    loginForm: FormGroup = this.fb.group({
        username: ['test1', [Validators.required, Validators.minLength(1)]],
        password: ['123456', [Validators.required, Validators.minLength(1)]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    login() {
        this.load = true;
        this.errors = [];

        const { username, password } = this.loginForm.value;

        this.authService
            .login(username, password)
            .pipe(delay(500))
            .subscribe((resp) => {
                if (resp === true) {
                    this.router.navigateByUrl('/browse');
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
