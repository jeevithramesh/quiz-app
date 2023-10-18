import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeQuizComponent } from './take-quiz.component';

const routes: Routes = [{ path: '', component: TakeQuizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeQuizRoutingModule {}
