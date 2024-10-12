import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {DictionaryService} from "../../services/dictionary.service";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent implements OnInit {
  englishWords: string[] = [];
  japaneseWords: string[] = [];

  filteredEnglishWords: string[] = [];
  filteredJapaneseWords: string[] = [];

  searchControl = new FormControl("");

  constructor(private dictionaryService: DictionaryService ) { }

  ngOnInit(): void {
    this.dictionaryService.englishWords$.subscribe(words => {
      this.englishWords = words;
      this.filteredEnglishWords = words;
      // console.log('English Words:', this.englishWords);
    });

    this.dictionaryService.japaneseWords$.subscribe(words => {
      this.japaneseWords = words;
      this.filteredJapaneseWords = words;
      // console.log('Japanese Words:', this.japaneseWords);
    });

    this.searchControl.valueChanges.subscribe(searchTerm => {
      this.filterWords(searchTerm);
    })
  }

  filterWords(searchTerm: string | null): void {
    const lowerCaseTerm = (searchTerm || '').toLowerCase();

    const filteredEnglish = this.englishWords
      .map((word, index) => ({ word, index }))  // Map to include the index
      .filter(item => item.word.toLowerCase().includes(lowerCaseTerm));

    this.filteredEnglishWords = filteredEnglish.map(item => item.word);

    this.filteredJapaneseWords = filteredEnglish.map(item => this.japaneseWords[item.index]);
  }

  search() {
    window.alert("ha ha ha, je vous ai bien niqué. Signé Zangdar.")
  }
}
