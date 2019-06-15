import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export class TeamState {
  constructor(public workers: Worker[]) {}
}
export function createInitialTeamState(): TeamState {
  return new TeamState(new Array<Worker>());
}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'team' })
export class TeamStore extends Store<TeamState> {
  constructor() {
    super(createInitialTeamState());
  }

  setTeam(workers: Worker[]) {
    this.update({ workers });
  }

  resetTeam() {
    this.update(createInitialTeamState());
  }
}
