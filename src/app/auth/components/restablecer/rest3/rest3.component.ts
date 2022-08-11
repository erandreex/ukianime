import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-rest3',
    templateUrl: './rest3.component.html',
    styleUrls: ['./rest3.component.css'],
})
export class Rest3Component implements OnInit {
    public load: boolean = false;
    public errors: string[] = [];

    rest3Form: FormGroup = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(1)]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    ngOnInit(): void {}

    submit() {
        const { password } = this.rest3Form.value;
        this.load = true;

        this.authService.cambiarPassRest(password).subscribe((resp) => {
            if (resp === true) {
                localStorage.removeItem('x-rest');
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
