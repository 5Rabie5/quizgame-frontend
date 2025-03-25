import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  players: string[] = ['Player 1', 'Player 2']; // أو يتم تحديثها ديناميكيًا لاحقًا

  gameName: string = '';
  gameCode: string = '';
  inviteLink: string = '';

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
  copyLink() {
    if (navigator.clipboard && this.inviteLink) {
      navigator.clipboard.writeText(this.inviteLink).then(() => {
        console.log('Link copied!');
        // يمكنك إضافة إشعار هنا مثل "تم النسخ"
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }
}
