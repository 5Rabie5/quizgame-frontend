import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinComponent } from './pages/join/join.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { GameScreenComponent } from './pages/game-screen/game-screen.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';

// الترجمة
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// إنشاء محمل الترجمة
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    WaitingRoomComponent,
    GameScreenComponent,
    AdminDashboardComponent
    // لا تضف CreateGameComponent هنا لأنه standalone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    // ستقوم باستيراد CreateGameComponent مباشرة في routing (كـ Standalone)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
