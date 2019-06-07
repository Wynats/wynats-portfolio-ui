import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/the-team', pathMatch: 'full' },
  {
    path: 'the-team',
    loadChildren: () =>
      import('./the-team/the-team.module').then(m => m.TheTeamModule)
  }
  // { path: '**', component: PageNotFoundComponent }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
