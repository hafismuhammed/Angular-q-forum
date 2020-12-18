import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiHost = 'http://forum.mashuptest.com/api';

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  register(body: User): Observable<User> {
    const regUrl = `${this.apiHost}/register`;
    return this.http.post<User>(regUrl, body,);
  }

  login(body: User): Observable<User> {
    const url = `${this.apiHost}/login`;
    return this.http.post<User>(url, body, httpOptions);
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(["/signIn"]);
  }

  authenticated() {
    return !!localStorage.getItem("token");
  }

//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.log(error);
//       return of(result as T)
//     };
//   }
 }
