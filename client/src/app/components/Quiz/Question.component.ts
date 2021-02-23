import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { Quiz } from './quiz';

@Component({
    selector: 'app-question',
    templateUrl: './Question.component.html',
    styleUrls: ['./Quiz.component.scss']
})

export class QuestionComponent implements OnInit, DoCheck {
    @Input() questionIndex: number;
    currentQuestion: string;
    currentOptions: string[];
    questions: Quiz[];
    userAnswer: string;
    correctAnswer: string;
    constructor(private quizService: QuizService) { }

    @Output() answers =
        new EventEmitter<{ user_answer: string, correct_answer: string }>();


    @Output() totalQuestions = new EventEmitter<number>();

    ngOnInit(): void {
        this.getQuestions();

    }
    randomNumber(min: 0, max: 14) {
        return Math.random() * (max - min) + min;
    }
    getQuestions() {
        return this.quizService.getQuestions().subscribe(
            data => {

                this.questions = data.results;

            }

        )
    }
    setUserAnswer(option: string) {
        this.userAnswer = option;
        this.correctAnswer = this.questions[this.questionIndex].correct_answer;
        this.answers.emit(
            { user_answer: this.userAnswer, correct_answer: this.correctAnswer });
    }



    ngDoCheck(): void {
        this.currentQuestion = this.questions[this.questionIndex].question;
        this.currentOptions = this.questions[this.questionIndex].incorrect_answers.concat(this.questions[this.questionIndex].correct_answer);
    }
}