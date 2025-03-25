import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  gameName: string = '';
  gameCode: string = '';
  inviteLink: string = '';
  players: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.gameName = localStorage.getItem('gameName') || 'Untitled';
    this.gameCode = localStorage.getItem('gameCode') || '';
    this.inviteLink = `${window.location.origin}/join?code=${this.gameCode}`;

    // mock players - replace with real WebSocket listeners
    this.players = ['Player 1', 'Player 2']; // temporary example
  }

  startGame(): void {
    // Save any necessary state if needed
    this.router.navigate(['/game']);
  }

  copyInviteLink(): void {
    navigator.clipboard.writeText(this.inviteLink);
    alert('Invite link copied!');
  }
}
