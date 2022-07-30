import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    public width: string = '250px';

    profileForm: FormGroup = this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: [''],
    });

    constructor(private fb: FormBuilder, private userService: UserService) {}
    ngOnInit(): void {
        this.userService.infoUser().subscribe((value) => {
            this.profileForm.patchValue(value);
        });
    }

    update() {
        const { firstname, lastname } = this.profileForm.value;

        this.userService.updateInfo(firstname, lastname).subscribe((ok) => {
            if (ok) {
                console.log('exito');
            } else {
                console.log('Fallo');
            }
        });
    }
}
