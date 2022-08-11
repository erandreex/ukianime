import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
import { UserService } from '../../user.service';
import { delay } from 'rxjs';

@Component({
    selector: 'app-questions-security',
    templateUrl: './questions-security.component.html',
    styleUrls: ['./questions-security.component.css'],
})
export class QuestionsSecurityComponent implements OnInit, OnDestroy {
    public load: boolean = false;
    public errors: string[] = [];
    public errores: boolean = false;
    public exito: boolean = false;

    questionSecurityForm: FormGroup = this.fb.group({
        question1: ['Comida favorita', [Validators.required]],
        answer1: ['', [Validators.minLength(0)]],
        question2: ['Videojuego favorito', [Validators.required]],
        answer2: ['', [Validators.minLength(0)]],
        question3: ['Equipo favorito', [Validators.required]],
        answer3: ['', [Validators.minLength(0)]],
    });

    constructor(private fb: FormBuilder, private userService: UserService, private sharedService: SharedService) {
        this.sharedService.alertAccount('open');
    }

    ngOnInit(): void {
        this.userService.listQuestion('Comida favorita').subscribe((value) => {
            this.questionSecurityForm.get('answer1')?.setValue(value.answer);
        });
        this.userService.listQuestion('Videojuego favorito').subscribe((value) => {
            this.questionSecurityForm.get('answer2')?.setValue(value.answer);
        });
        this.userService.listQuestion('Equipo favorito').subscribe((value) => {
            this.questionSecurityForm.get('answer3')?.setValue(value.answer);
        });
    }

    update() {
        this.load = true;
        this.errores = false;
        this.exito = false;

        const { answer1, answer2, answer3 } = this.questionSecurityForm.value;
        const { question1, question2, question3 } = this.questionSecurityForm.value;

        if (answer1) {
            this.userService
                .questions(question1, answer1)
                .pipe(delay(1000))
                .subscribe((resp) => {
                    if (resp.ok === true) {
                        this.load = false;
                    } else {
                        this.errores = true;
                    }
                });
        }

        if (answer2) {
            this.userService
                .questions(question2, answer2)
                .pipe(delay(1000))
                .subscribe((resp) => {
                    if (resp.ok === true) {
                        this.load = false;
                    } else {
                        this.errores = true;
                    }
                });
        }

        if (answer3) {
            this.userService
                .questions(question3, answer3)
                .pipe(delay(1000))
                .subscribe((resp) => {
                    if (resp.ok === true) {
                        this.load = false;
                    } else {
                        this.errores = true;
                    }
                });
        }

        setTimeout(() => {
            if (this.errores) {
                this.errors = ['Ha ocurrido un error!'];
            } else {
                this.exito = true;
            }
        }, 1300);
    }

    ngOnDestroy(): void {
        this.sharedService.alertAccount('close');
    }
}
