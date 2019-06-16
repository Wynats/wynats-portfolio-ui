import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WorkerStore, WorkerState } from './worker.store';
import { Worker } from './worker.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerQuery extends QueryEntity<WorkerState, Worker> {
  workersData$ = this.selectAll().pipe(map(this.getWorkersData.bind(this)));
  workerSelected$ = new BehaviorSubject<Worker>(null);
  constructor(protected store: WorkerStore) {
    super(store);
  }

  getWorkersData(workers: Array<Worker>) {
    const workersReduced = workers.reduce(
      (workerReduced: { [id: number]: Worker }, worker: Worker) => {
        return {
          ...workerReduced,
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
