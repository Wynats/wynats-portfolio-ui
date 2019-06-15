import { Injectable } from '@angular/core';
import { QueryEntity, toBoolean, Query } from '@datorama/akita';
import { SessionStore } from './session.store';
import { filter, map } from 'rxjs/operators';
import { User, SessionState } from './session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select(state => toBoolean(state.user));
  loggedInUser$ = this.select('user');

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getValue().user);
  }
}
