import { Component, OnInit, Input } from '@angular/core';
import { Worker, WorkerService, WorkerQuery } from '../../state/worker';

@Component({
  selector: 'wyn-workers-visualizer',
  templateUrl: './workers-visualizer.component.html',
  styleUrls: ['./workers-visualizer.component.scss']
})
export class WorkersVisualizerComponent implements OnInit {
  @Input() workers: Worker[];

  constructor(
    public workerService: WorkerService,
    public workerQuery: WorkerQuery
  ) {}

  ngOnInit() {}
}
