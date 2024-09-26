import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { NavComponent } from './components/nav/nav.component';
import { WordsComponent } from './components/words/words.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    NavComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
