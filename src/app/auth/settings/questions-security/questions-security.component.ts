import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-questions-security',
    templateUrl: './questions-security.component.html',
    styleUrls: ['./questions-security.component.css'],
})
export class QuestionsSecurityComponent implements OnInit {
    questionSecurityForm: FormGroup = this.fb.group({
        question1: ['Comida favorita', [Validators.required]],
        answer1: ['', [Validators.required, Validators.minLength(3)]],
        question2: ['Videojuego favorito', [Validators.required]],
        answer2: ['', [Validators.required, Validators.minLength(3)]],
        question3: ['Equipo favorito', [Validators.required]],
        answer3: ['', [Validators.required, Validators.minLength(3)]],
    });

    constructor(private fb: FormBuilder, private userService: UserService) {}

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
        const { answer1, answer2, answer3 } = this.questionSecurityForm.value;
        const { question1, question2, question3 } = this.questionSecurityForm.value;

        if (answer1) {
            this.userService.questions(question1, answer1).subscribe((ok) => {
                console.log(ok);
            });
        }

        if (answer2) {
            this.userService.questions(question2, answer2).subscribe((ok) => {
                console.log(ok);
            });
        }

        if (answer3) {
            this.userService.questions(question3, answer3).subscribe((ok) => {
                console.log(ok);
            });
        }
    }
}
