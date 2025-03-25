import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  playerName = '';
  gameCode = '';
  selectedLang = 'en';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    const savedLang = localStorage.getItem('lang');
    this.selectedLang = savedLang || 'en';
    this.translate.use(this.selectedLang);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['code']) {
        this.gameCode = params['code'];
      }
    });
  }

  changeLang() {
    this.translate.use(this.selectedLang);
    localStorage.setItem('lang', this.selectedLang);
  }

  joinGame() {
    localStorage.setItem('playerName', this.playerName);
    localStorage.setItem('gameCode', this.gameCode);
    localStorage.setItem('isHost', 'false');
    this.router.navigate(['/waiting']);
  }
}
