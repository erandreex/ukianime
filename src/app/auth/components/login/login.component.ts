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

    loginForm: FormGroup = this.fb.group({
        username: ['test1', [Validators.required, Validators.minLength(3)]],
        password: ['123456', [Validators.required, Validators.minLength(6)]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    login() {
        this.load = true;

        const { username, password } = this.loginForm.value;

        this.authService
            .login(username, password)
            .pipe(delay(500))
            .subscribe((ok) => {
                if (ok === true) {
                    this.router.navigateByUrl('/browse');
                } else {
                    this.load = false;
                    console.log(ok);
                }
            });
    }
    ngOnDestroy(): void {
        this.load = false;
    }
}
