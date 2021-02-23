
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuizComponent } from './Quiz.component';
import { QuestionComponent } from './Question.component';

@NgModule({
    declarations: [
        QuestionComponent, QuizComponent
    ], imports: [
        BrowserModule, NgbModule
    ],
    providers: [],
    bootstrap: [QuizComponent]
})

export class QuizModule {

}