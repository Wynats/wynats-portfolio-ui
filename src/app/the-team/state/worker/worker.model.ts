import { ContentList } from 'src/app/shared/models';
import { ID, guid } from '@datorama/akita';

export class Worker extends ContentList {
  constructor(public id: ID, public name: string, public description: string) {
    super();
    this.id = guid();
  }
}
