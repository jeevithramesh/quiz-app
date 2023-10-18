import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quiz',
    loadChildren: () =>
      import('../lib/components/take-quiz/take-quiz.module').then(
        (m) => m.TakeQuizModule
      ),
  },
  { path: '**', redirectTo: 'quiz' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
