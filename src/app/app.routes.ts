import { Routes } from '@angular/router';
import { GamersComponent } from './gamers/gamers.component';
import { AddGamerComponent } from './add-gamer/add-gamer.component';
import { UpdateGamerComponent } from './update-gamer/update-gamer.component';

{ path: 'update-gamer/:id', component: UpdateGamerComponent },

export const routes: Routes = [
  { path: 'gamers', component: GamersComponent },
  { path: 'add-gamer', component: AddGamerComponent },
  { path: '', redirectTo: 'gamers', pathMatch: 'full' }
];