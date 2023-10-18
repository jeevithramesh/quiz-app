import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeQuizComponent } from './take-quiz.component';
import { FormsModule } from '@angular/forms';
import { TakeQuizRoutingModule } from './take-quiz-routing.module';
import { QuizService } from 'src/lib/services/quiz.service';

@NgModule({
  declarations: [TakeQuizComponent],
  imports: [CommonModule, FormsModule, TakeQuizRoutingModule],
  providers: [QuizService],
})
export class TakeQuizModule {}
