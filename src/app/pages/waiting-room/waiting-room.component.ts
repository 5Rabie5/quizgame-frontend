import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {
  playerName = '';
  gameCode = '';
  isReady = false;
  players: { name: string; ready: boolean }[] = [];

  ngOnInit() {
    this.playerName = localStorage.getItem('playerName') || 'Unknown';
    this.gameCode = localStorage.getItem('gameCode') || 'XXXX';

    // مؤقتًا – سنضيف WebSocket لاحقًا
    this.players = [
      { name: this.playerName, ready: this.isReady },
      { name: 'Guest 1', ready: false },
      { name: 'Guest 2', ready: true }
    ];
  }

  markReady() {
    this.isReady = true;
    const player = this.players.find(p => p.name === this.playerName);
    if (player) player.ready = true;
  }
}
