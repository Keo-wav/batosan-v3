import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise1Component } from "./components/exercise1/exercise1.component";
import { WordsComponent } from "./components/words/words.component";

const routes: Routes = [
  { path: '', redirectTo: '/exercise1', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'words', component: WordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
