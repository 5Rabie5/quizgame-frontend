import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {
  gameName = '';
  winPoints = 10;
  playerCount = 4;
  category = 'general';
  difficulty = 'easy';

  constructor(private router: Router) {}

  createGame() {
    const newGameCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    localStorage.setItem('gameName', this.gameName);
    localStorage.setItem('gameCode', newGameCode);
    localStorage.setItem('isHost', 'true');
    localStorage.setItem('winPoints', this.winPoints.toString());
    localStorage.setItem('playerCount', this.playerCount.toString());
    localStorage.setItem('category', this.category);
    localStorage.setItem('difficulty', this.difficulty);
    this.router.navigate(['/admin']);
  }
}
