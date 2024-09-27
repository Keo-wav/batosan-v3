import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'batosan-v3';
  isNavbarVisible: boolean = true;
  isExercise1Visible: boolean = true;
  isWordsVisible: boolean = false;
}
