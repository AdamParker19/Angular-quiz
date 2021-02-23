import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { QuizComponent } from './components/Quiz/Quiz.component';
import { ResultsComponent } from './components/Results/Results.components';

const routes: Routes = [{
  path: 'test',
  component: TestComponent
},
{
  path: 'quiz',
  component: QuizComponent
},
{
  path: '',
  component: ResultsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
