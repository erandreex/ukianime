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

    registroForm: FormGroup = this.fb.group({
        firstname: ['Nombre', [Validators.required, Validators.minLength(3)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['123456', [Validators.required, Validators.minLength(6)]],
        password2: ['123456', [Validators.required, Validators.minLength(6)]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    registro() {
        this.load = true;

        const { firstname, username, password } = this.registroForm.value;

        this.authService
            .registro(firstname, username, password)
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
