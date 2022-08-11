import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, map, tap } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
    public load: boolean = false;
    public errors: string[] = [];
    public exito: boolean = false;

    profileForm: FormGroup = this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: [''],
    });

    constructor(private fb: FormBuilder, private userService: UserService, private sharedService: SharedService) {
        this.sharedService.alertAccount('open');
    }

    ngOnInit(): void {
        this.userService.infoUser().subscribe((value) => {
            this.profileForm.patchValue(value);
        });
    }

    update() {
        this.load = true;
        this.exito = false;
        this.errors = [];

        const { firstname, lastname } = this.profileForm.value;

        this.userService
            .updateInfo(firstname, lastname)
            .pipe(delay(1000))
            .subscribe((resp) => {
                if (resp) {
                    this.load = false;
                    this.exito = true;
                } else {
                    this.load = false;
                    this.errors = resp.errors;
                }
            });
    }
    ngOnDestroy(): void {
        this.sharedService.alertAccount('close');
    }
}
