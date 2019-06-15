import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Worker } from './worker.model';

export class WorkerState implements EntityState<Worker> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'workers' })
export class WorkerStore extends EntityStore<WorkerState, Worker> {
  constructor() {
    super();
  }
}
