import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersListComponent } from './containers/workers-list/workers-list.component';

const routes: Routes = [{ path: '', component: WorkersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheTeamRoutingModule {}
