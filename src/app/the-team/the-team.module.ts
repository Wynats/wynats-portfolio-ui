import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheTeamRoutingModule } from './the-team-routing.module';
import { MaterialModule } from '../shared';
import { WorkersListComponent } from './containers/workers-list/workers-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkerService } from './state/worker';
import { HttpClientModule } from '@angular/common/http';
import { WorkersVisualizerComponent } from './components/workers-visualizer/workers-visualizer.component';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';

@NgModule({
  declarations: [WorkersListComponent, WorkersVisualizerComponent, WorkerDetailComponent],
  imports: [
    CommonModule,
    TheTeamRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class TheTeamModule {}
