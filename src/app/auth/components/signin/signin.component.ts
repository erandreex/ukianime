import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
    registroForm: FormGroup = this.fb.group({
        firstname: ['Nombre', [Validators.required, Validators.minLength(3)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['123456', [Validators.required, Validators.minLength(6)]],
        password2: ['123456', [Validators.required, Validators.minLength(6)]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    registro() {
        const { firstname, username, password } = this.registroForm.value;

        this.authService.registro(firstname, username, password).subscribe((ok) => {
            if (ok === true) {
                this.router.navigateByUrl('/browse');
            } else {
                console.log(ok);
            }
        });
    }
}
