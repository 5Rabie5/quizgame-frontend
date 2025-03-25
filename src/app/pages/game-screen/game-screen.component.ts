import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {
  question = '';
  answers: string[] = [];
  hasBuzzed = false;
  canAnswer = false;
  selectedAnswer: string | null = null;

  ngOnInit() {
    // مؤقتًا، سنجلب سؤالًا وهميًا
    this.question = 'What is the capital of Germany?';
    this.answers = ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'];
  }

  buzz() {
    this.hasBuzzed = true;

    // ⚠️ في النسخة الحقيقية، نرسل buzz للسيرفر
    setTimeout(() => {
      this.canAnswer = true; // مؤقتًا: نفترض اللاعب هو الأول
    }, 1000);
  }

  chooseAnswer(answer: string) {
    this.selectedAnswer = answer;
    alert(`You chose: ${answer}`);
    // لاحقًا: أرسل الإجابة للسيرفر للتحقق
  }
}
