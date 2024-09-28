import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Exercise1Component } from "./components/exercise1/exercise1.component";
import { Exercise2Component } from "./components/exercise2/exercise2.component";
import { WordsComponent } from "./components/words/words.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise1', component: Exercise2Component },
  { path: 'words', component: WordsComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route for handling undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
