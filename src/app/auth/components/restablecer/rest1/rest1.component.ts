import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-rest1',
    templateUrl: './rest1.component.html',
    styleUrls: ['./rest1.component.css'],
})
export class Rest1Component implements OnInit {
    rest1Form: FormGroup = this.fb.group({
        username: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    ngOnInit(): void {}

    algo() {}
}
