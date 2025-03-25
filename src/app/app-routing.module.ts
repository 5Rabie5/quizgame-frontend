import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoinComponent } from './pages/join/join.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { GameScreenComponent } from './pages/game-screen/game-screen.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';
import {CreateGameComponent} from "./pages/create-game/create-game.component";

const routes: Routes = [
  { path: 'create', component: CreateGameComponent },
  { path: 'join', component: JoinComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'waiting', component: WaitingRoomComponent },
  { path: 'game', component: GameScreenComponent },
  { path: '', redirectTo: 'create', pathMatch: 'full' }, // 👈 هذا هو المفتاح
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
