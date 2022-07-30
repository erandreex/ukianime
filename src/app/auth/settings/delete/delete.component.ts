import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
    profileForm: FormGroup = this.fb.group({
        firstname: ['', [Validators.required, Validators.minLength(3)]],
    });

    constructor(private fb: FormBuilder) {}

    update() {}
}
