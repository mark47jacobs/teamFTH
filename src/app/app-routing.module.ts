import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
