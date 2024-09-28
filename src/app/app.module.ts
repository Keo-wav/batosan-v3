import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { NavComponent } from './components/nav/nav.component';
import { WordsComponent } from './components/words/words.component';
import { HomeComponent } from './components/home/home.component';
import { Exercise2Component } from './components/exercise2/exercise2.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    NavComponent,
    WordsComponent,
    HomeComponent,
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
