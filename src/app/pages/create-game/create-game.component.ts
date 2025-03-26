import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    TranslatePipe
  ]
})
export class CreateGameComponent {
  gameName = '';
  winPoints: number | 'unlimited' = 100;
  playerCount: number | 'unlimited' = 2;
  difficulty = 'easy';
  categoryDropdownOpen = false;

  categories: { [key: string]: boolean } = {
    general: true,
    science: false,
    sports: false
  };

  get categoryKeys(): string[] {
    return Object.keys(this.categories);
  }

  toggleDropdown() {
    this.categoryDropdownOpen = !this.categoryDropdownOpen;
  }

  createGame() {
    const selectedCategories = Object.keys(this.categories).filter(key => this.categories[key]);
    const payload = {
      gameName: this.gameName,
      winPoints: this.winPoints,
      playerCount: this.playerCount,
      difficulty: this.difficulty,
      categories: selectedCategories
    };
    console.log('Game Created:', payload);
  }
}
