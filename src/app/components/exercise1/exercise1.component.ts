import { Component, OnInit } from '@angular/core';
import { DictionaryService } from "../../services/dictionary.service";

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component implements OnInit {
  englishWords: string[] = [];
  japaneseWords: string[] = [];

  shuffledEnglishWords: string[] = [];
  shuffledJapaneseWords: string[] = [];

  constructor(private dictionaryService: DictionaryService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dictionaryService.englishWords$.subscribe(words => {
        this.englishWords = words;
        console.log('English Words:', this.englishWords);
      });

      this.dictionaryService.japaneseWords$.subscribe(words => {
        this.japaneseWords = words;
        console.log('Japanese Words:', this.japaneseWords);
      });

      this.chooseWords();
    }, 1000);
  }

  chooseWords(): void {
    // clear arrays
    this.shuffledEnglishWords = [];
    this.shuffledJapaneseWords = [];

    // settings definition
    const numberOfWords: number = 5;
    const selectedIndexes: Set<number> = new Set();

    // choosing the random indexes
    while (selectedIndexes.size < numberOfWords) {
      const randomIndex = Math.floor(Math.random() * this.englishWords.length);
      selectedIndexes.add(randomIndex);
    }

    // selecting en/jp words at same indexes
    selectedIndexes.forEach(index => {
      this.shuffledEnglishWords.push(this.englishWords[index]);
      this.shuffledJapaneseWords.push(this.japaneseWords[index]);
    })

    // Shuffle arrays again
    this.shuffledEnglishWords = this.shuffle(this.shuffledEnglishWords);
    this.shuffledJapaneseWords = this.shuffle(this.shuffledJapaneseWords);
  }

  shuffle(array: string[]): string[]
  {
    // Clone the array to avoid modifying the original
    const shuffledArray = [...array];
    // Iterate through the array in reverse order
    for (let i = shuffledArray.length - 1; i > 0; i--)
    {
      // Generate a random index 'j' between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at indices 'i' and 'j'
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  // ISSUE : EXERCISE COMPONENT LOADS FIRST, WITH DICTIONARY SERVICE IN CONSTRUCTOR
  //         AT THAT POINT THE DICTIONARY SERVICE DID NOT HAVE TIME TO RETRIEVE ALL SPREADSHEET DATA SO EX1 COMPONENT DISPLAYS NOTHING.
  //         AFTER A LITTLE BIT, THE DICTIONARY SERVICE FINISHES TO FETCH WORDS, BUT THE COMPONENT HAS ALREADY DONE ITS NgOnInit PROCESS.
}
