import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Worker, WorkerUI } from './worker.model';

export class WorkerState implements EntityState<Worker> {
  constructor(public ui: WorkerUI) {}
}
const initialState = new WorkerState(new WorkerUI(null));

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'workers' })
export class WorkerStore extends EntityStore<WorkerState, Worker> {
  constructor() {
    super(initialState);
  }
}
