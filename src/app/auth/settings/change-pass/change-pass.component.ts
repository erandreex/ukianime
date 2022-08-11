import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { SharedService } from '../../../shared/shared.service';
import { delay } from 'rxjs';

@Component({
    selector: 'app-change-pass',
    templateUrl: './change-pass.component.html',
    styleUrls: ['./change-pass.component.css'],
})
export class ChangePassComponent {
    public load: boolean = false;
    public errors: string[] = [];
    public exito: boolean = false;

    passwordForm: FormGroup = this.fb.group({
        oldPassword: ['', [Validators.required, Validators.minLength(0)]],
        password: ['', [Validators.required, Validators.minLength(0)]],
    });

    constructor(private fb: FormBuilder, private authService: AuthService, private sharedService: SharedService) {
        this.sharedService.alertAccount('open');
    }

    changePass() {
        this.exito = false;
        this.load = true;
        this.errors = [];

        const { oldPassword, password } = this.passwordForm.value;

        this.authService
            .cambiarPass(oldPassword, password)
            .pipe(delay(1000))
            .subscribe((resp) => {
                if (resp === true) {
                    this.load = false;
                    this.exito = true;
                } else {
                    this.errors = resp.errors;
                    this.load = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.sharedService.alertAccount('close');
    }
}
