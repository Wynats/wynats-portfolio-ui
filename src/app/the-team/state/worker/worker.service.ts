import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { WorkerStore } from './worker.store';
import { Worker, WorkerUI } from './worker.model';
import { tap, map } from 'rxjs/operators';
import { WorkerDataService } from './worker-data.service';
import { Observable, noop } from 'rxjs';
import { WorkerQuery } from './worker.query';

@Injectable({ providedIn: 'root' })
export class WorkerService {
  constructor(
    private workerStore: WorkerStore,
    private workerDataService: WorkerDataService,
    private workerQuery: WorkerQuery
  ) {}

  getWorkers(): Observable<Array<Worker>> {
    const request = this.workerDataService.getWorkers().pipe(
      tap(w => {
        this.workerStore.set(
          w.map(worker => {
            return new Worker(worker.name, worker.description);
          })
        );
      })
    );
    return request;
  }

  selectWorker(worker: Worker) {
    this.workerStore.update({ ui: new WorkerUI(worker) });
  }

  add(worker: Worker) {
    this.workerStore.add(worker);
  }

  update(id, worker: Partial<Worker>) {
    this.workerStore.update(id, worker);
  }

  remove(id: ID) {
    this.workerStore.remove(id);
  }
}
