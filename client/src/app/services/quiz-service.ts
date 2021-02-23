import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(API_URL + 'questions', { responseType: 'json' });
  }

  initQuiz(email: String): Observable<any> {
    return this.http.post(API_URL + 'Quiz/startQuiz', { email }, httpOptions);
  }

  submitAnswer(_id: String, question: String): Observable<any> {
    return this.http.post(API_URL + 'Quiz/updateScore', { _id, question }, httpOptions);
  }
}