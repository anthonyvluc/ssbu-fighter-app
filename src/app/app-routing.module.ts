import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { DashboardComponent }     from './dashboard/dashboard.component';
import { FightersComponent }      from './fighters/fighters.component'
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FighterDetailComponent },
  { path: 'fighters', component: FightersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
