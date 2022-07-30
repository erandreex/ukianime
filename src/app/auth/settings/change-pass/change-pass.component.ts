import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-change-pass',
    templateUrl: './change-pass.component.html',
    styleUrls: ['./change-pass.component.css'],
})
export class ChangePassComponent {
    passwordForm: FormGroup = this.fb.group({
        oldPassword: ['', [Validators.required]],
        newPassword1: ['', [Validators.required]],
        newPassword2: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    changePass() {
        const { oldPassword, newPassword1, newPassword2 } = this.passwordForm.value;

        this.authService.cambiarPass(oldPassword, newPassword1, newPassword2).subscribe((ok) => {
            console.log(ok);
        });
    }
}
