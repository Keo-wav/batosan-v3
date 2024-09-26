import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordsDatabase: string[] = [];
  spreadsheetID: string = environment.spreadsheetID;
  sheetRange: string = environment.sheetRange;
  apiKey: string = environment.apiKey;

  englishWords: string[] = [];
  japaneseWords: string[] = [];

  constructor(private http: HttpClient) {
    this.fetchWords();
    this.processWords(this.wordsDatabase);
  }

  private processWords(words: string[]): void {
    this.englishWords = this.getEngWords(this.wordsDatabase);
    this.japaneseWords = this.getJapWords(this.wordsDatabase);
  }

  private fetchWords() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetID}/values/${this.sheetRange}?key=${this.apiKey}`;

    this.http.get<any>(url).subscribe(
      (response) => {
        if (response.values) {
          const rows = response.values;
          this.wordsDatabase = rows.flat();
          console.log('Successfully extracted Google Sheet data:', this.wordsDatabase);
        } else {
          console.error('No data found in response:', response);
        }
      },
      (error) => {
        console.error('Error fetching the Google Sheet data:', error);
      }
    );
  }

  getEngWords(words: string[]) {
    this.englishWords = [];
    for (let i = 0; i < words.length; i++) {
      if (i % 2 === 0) {
        this.englishWords.push(words[i]);
      }
    }
    return this.englishWords
  }

  getJapWords(words: string[]) {
    this.japaneseWords = [];
    for (let i = 0; i < words.length; i++) {
      if (i % 2 !== 0) {
        this.japaneseWords.push(words[i]);
      }
    }
    return this.japaneseWords
  }
}
