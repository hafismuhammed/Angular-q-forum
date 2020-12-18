import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/common/nav/nav.component';
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionDetailsComponent } from './components/question/question-details/question-details.component';
import { AskQuestionComponent } from './components/question/ask-question/ask-question.component';
import { UpdateQuestionComponent } from './components/question/update-question/update-question.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { UpdateAnswerComponent } from './components/answer/update-answer/update-answer.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';
import { PaginationComponent } from './components/question/question-list/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    QuestionListComponent,
    QuestionDetailsComponent,
    AskQuestionComponent,
    UpdateQuestionComponent,
    AnswerQuestionComponent,
    UpdateAnswerComponent,
    PaginationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
