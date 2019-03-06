import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { IndexComponent }         from './index/index.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { FightersComponent }      from './fighters/fighters.component'
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FighterDetailComponent },
  { path: 'fighters', component: FightersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
