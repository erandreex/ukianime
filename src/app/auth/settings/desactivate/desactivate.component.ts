import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-desactivate',
    templateUrl: './desactivate.component.html',
    styleUrls: ['./desactivate.component.css'],
})
export class DesactivateComponent implements OnDestroy {
    public load: boolean = false;
    public errors: string[] = [];

    desactiveForm: FormGroup = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(0)]],
    });

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private sharedService: SharedService,
        private router: Router
    ) {
        this.sharedService.alertAccount('open');
    }

    desactivate() {
        this.load = true;
        this.errors = [];

        const { password } = this.desactiveForm.value;

        this.userService
            .changeStatus(password)
            .pipe(delay(1000))
            .subscribe((resp) => {
                if (resp === true) {
                    this.router.navigateByUrl('/login');
                } else {
                    this.load = false;
                    this.errors = resp.errors;
                }
            });
    }

    ngOnDestroy(): void {
        this.sharedService.alertAccount('close');
        this.load = false;
    }
}
