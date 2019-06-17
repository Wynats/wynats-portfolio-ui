import { ContentList } from 'src/app/shared/models';
import { ID, guid } from '@datorama/akita';

export class Worker extends ContentList {
  public id: ID;
  constructor(public name: string, public description: string) {
    super();
    this.id = guid();
  }
}
export class WorkerUI {
  constructor(public workerSelected: Worker) {}
}
