import { Component, OnInit, Input } from '@angular/core';
import { Worker, WorkerQuery } from '../../state/worker';

@Component({
  selector: 'wyn-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {
  @Input() worker: Worker;

  constructor() {}

  ngOnInit() {}
}
