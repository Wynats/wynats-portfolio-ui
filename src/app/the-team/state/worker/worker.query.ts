import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WorkerStore, WorkerState } from './worker.store';
import { Worker } from './worker.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkerQuery extends QueryEntity<WorkerState, Worker> {
  workersData$ = this.selectAll().pipe(map(this.getWorkersData.bind(this)));
  constructor(protected store: WorkerStore) {
    super(store);
  }

  getWorkersData(workers: Array<Worker>) {
    const workersReduced = workers.reduce(
      (work: { [id: number]: Worker }, worker: Worker) => {
        return {
          ...work,
          [worker.id]: worker
        };
      },
      {
        ...workers
      }
    );
    return workersReduced;
  }
}
