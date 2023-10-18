import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuizData(): Observable<any[]> {
    console.log('in')
    return this.http.get<any[]>('../../assets/quiz-data.json');
  }
}
