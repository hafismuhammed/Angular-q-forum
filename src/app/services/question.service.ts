import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

const token = localStorage.getItem("token");
const httpOptions = { 
  headers: new HttpHeaders({ 
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Bearer" + token 
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiHost = 'http://forum.mashuptest.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  listQuestion(): Observable<Question[]> {
    const url = `${this.apiHost}/question`;
    return this.http.get<Question[]>(url, httpOptions);
  }

  askQuestion(question: Question): Observable<Question> {
    const url = `${this.apiHost}/question`;
    return this.http.post<Question>(url, question, httpOptions)
  }

  showQuestion(id: number): Observable<Question> {
    const url = `${this.apiHost}/question/${id}`;
    return this.http.get<Question>(url, httpOptions);
  }

  editQuestion(question:Question): Observable<any> {
    const url = `${this.apiHost}/question/${question.id}`;
    return this.http.put(url, question, httpOptions);
  }

  answerQuestion(answer: Answer): Observable<Answer> {
    const url = `${this.apiHost}/${answer.question_id}/answer`;
    return this.http.post<Answer>(url, answer,httpOptions);
  }

  editAnswer(answer: Answer): Observable<Answer> {
    const url = `${this.apiHost}/answer/${answer.id}`;
    return this.http.put<Answer>(url, answer, httpOptions);
  }

  deleteAnswer(answer: Answer): Observable<any> {
    const url = `${this.apiHost}/answer/${answer.id}`;
    return this.http.delete(url, httpOptions)
  }

  myQuestions(): Observable<Question[]> {
    const url = `${this.apiHost}/question/my-questions`;
    return this.http.get<Question[]>(url, httpOptions);
  }

  
  



  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };
  // }

}


