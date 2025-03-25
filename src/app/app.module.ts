import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// الصفحات
import { JoinComponent } from './pages/join/join.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { GameScreenComponent } from './pages/game-screen/game-screen.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';

// الترجمة
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { CommonModule } from '@angular/common';
 export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    WaitingRoomComponent,
    GameScreenComponent,
    AdminDashboardComponent,
    CreateGameComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
