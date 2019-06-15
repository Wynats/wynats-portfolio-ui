import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
import { SessionState, User, createInitialState } from './session.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }

  login(user: User) {
    this.update(new SessionState(user));
  }

  logout() {
    this.update(createInitialState());
  }
}
