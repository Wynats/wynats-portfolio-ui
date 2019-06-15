import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TeamState, TeamStore } from './team.store';

@Injectable({
  providedIn: 'root'
})
export class TeameQuery extends Query<TeamState> {
  getWorkers$ = this.select(state => state.workers);

  constructor(protected store: TeamStore) {
    super(store);
  }
}
