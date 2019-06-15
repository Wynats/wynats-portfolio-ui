import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { TeamStore } from './team.store';

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private teamStore: TeamStore) {}

  setTeam(workers: Worker[]) {
    this.teamStore.setTeam(workers);
  }

  resetTeam() {
    this.teamStore.resetTeam();
  }
}
