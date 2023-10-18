import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeQuizComponent } from './take-quiz.component';
import { FormsModule } from '@angular/forms';
import { TakeQuizRoutingModule } from './take-quiz-routing.module';

@NgModule({
  declarations: [TakeQuizComponent],
  imports: [CommonModule, FormsModule, TakeQuizRoutingModule],
  providers: [],
})
export class TakeQuizModule {}
