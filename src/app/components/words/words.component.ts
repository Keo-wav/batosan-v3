import {Component, Input, OnInit} from '@angular/core';
import {DictionaryService} from "../../services/dictionary.service";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent implements OnInit {
  englishWords: string[] = [];
  japaneseWords: string[] = [];

  constructor(private dictionaryService: DictionaryService ) { }

  ngOnInit(): void {
    this.dictionaryService.englishWords$.subscribe(words => {
      this.englishWords = words;
      console.log('English Words:', this.englishWords);
    });

    this.dictionaryService.japaneseWords$.subscribe(words => {
      this.japaneseWords = words;
      console.log('Japanese Words:', this.japaneseWords);
    });
  }

  search() {
    window.alert("ha ha ha, je vous ai bien niqué. Signé Zangdar.")
  }
}
