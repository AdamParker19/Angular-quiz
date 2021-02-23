import { Component, OnInit, Input, Output } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { Quiz } from './quiz'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { QuestionComponent } from './Question.component';
import { TokenStorageService } from '../../services/token-storage';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
    selector: 'quiz-page',
    templateUrl: './Quiz.component.html',
    styleUrls: ['./Quiz.component.scss']
})

export class QuizComponent implements OnInit {

    currentUser: any;
    currentUserId: any;
    currentIndex = 0;
    answers: any;
    questionNumber: String;
    score = 0;
    quizOver = false;
    disable = false;
    isLoggedIn = false;
    constructor(private token: TokenStorageService, private quizService: QuizService) { }

    ngOnInit(): void {
        this.disable = true;
        this.isLoggedIn = !!this.token.getToken();
        if (!this.isLoggedIn) {
            window.location.replace('/');
        }
        else {
            this.currentUser = this.token.getUser();
            this.initQuiz();
        }
    }


    receiveAnswers(receivedAnswers) {
        this.answers = receivedAnswers;
        this.disable = false;
    }
    goNext() {
        this.disable = true;
        this.currentIndex++;

        if (this.currentIndex > 9) {
            this.endQuiz();
        }

    }

    submit() {
        if (this.disable) {
            alert('Please select an option before submitting')

        }
        else {
            this.updateScore();
        }

    }

    goPrevious() {
        this.disable = true;
        if (this.currentIndex === 0) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex--;
        }
    }

    initQuiz(): void {
        this.quizService.initQuiz(this.currentUser).subscribe(
            data => {
                this.currentUserId = data._id;
            },
            err => {
                console.log(err.error.message);
            }

        );
    }
    endQuiz() {
        this.quizOver = true;
        alert('Quiz Over! Score is ' + this.score + '/ 10');
    }

    updateScore() {
        if (this.answers.user_answer === this.answers.correct_answer) {
            this.questionNumber = 'q' + (this.currentIndex + 1);
            console.log(this.questionNumber)
            this.score++;
        }
    }
}