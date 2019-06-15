import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionStore } from './session/state/session.store';
import { SessionQuery } from './session/state/session.query';
import { SessionService } from './session/state/session.service';

@NgModule({
  declarations: [],
  providers: [SessionStore, SessionQuery, SessionService],
  imports: [CommonModule]
})
export class CoreModule {}
