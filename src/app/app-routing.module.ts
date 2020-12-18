import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { AskQuestionComponent } from './components/question/ask-question/ask-question.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { QuestionDetailsComponent } from './components/question/question-details/question-details.component';
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { UpdateQuestionComponent } from './components/question/update-question/update-question.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/signIn', pathMatch: 'full'},
  {path: 'signIn', component: LoginComponent},
  {path: 'signUp', component: RegisterComponent},
  {path: 'questions', canActivate: [(AuthGuard)], component: QuestionListComponent},
  {path: 'question/:id', canActivate: [(AuthGuard)],component: QuestionDetailsComponent},
  {path: 'ask-question', canActivate: [(AuthGuard)],component: AskQuestionComponent},
  {path: 'update-question', canActivate: [(AuthGuard)],component: UpdateQuestionComponent },
  {path: 'answer-question', canActivate: [(AuthGuard)],component:AnswerQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
