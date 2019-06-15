import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from './session.store';
import { User, SessionState } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  login(user: User) {
    this.sessionStore.update(new SessionState(user));
  }
}
