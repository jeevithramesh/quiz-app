import { Component, OnInit } from '@angular/core';
import { quizData } from 'src/lib/services/quiz';

interface quiz {
  question: string;
  options: string[];
  answer: string;
}

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss'],
})
export class TakeQuizComponent implements OnInit {

  userName: string = '';
  quizData: quiz[] = [];
  currentQuestionIndex = 0;
  selectedOption: string = '';
  userAnswers: string[] = [];
  // showResults = false;
  currentPageIndex = 0;

  constructor() {}

  ngOnInit() {
    this.quizData = quizData;
    this.userAnswers = Array(this.quizData.length).fill('');
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.userAnswers[this.currentQuestionIndex] = option;
  }

  goToQuestion(index: number) {
    if (index >= 0 && index < this.quizData.length) {
      this.currentQuestionIndex = index;
      this.selectedOption = this.userAnswers[this.currentQuestionIndex] || '';
    }
  }

  isQuestionAnswered(index: number): boolean {
    return this.userAnswers[index] !== '';
  }

  canSubmit(): boolean {
    return this.userAnswers.filter((answer) => answer === '').length === 0;
  }

  checkAnswer(questionIndex: number): boolean {
    return (
      this.userAnswers[questionIndex] === this.quizData[questionIndex].answer
    );
  }

  getScore() {
    return this.userAnswers.filter((val, i) => val === this.quizData[i].answer)
      .length;
  }

  takeQuizAgain() {
    this.currentPageIndex = 1;
    this.currentQuestionIndex = 0;
    this.selectedOption = '';
    this.userAnswers = Array(this.quizData.length).fill('');
  }
}
