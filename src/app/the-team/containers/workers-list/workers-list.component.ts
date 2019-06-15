import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/core/session/state/session.query';
import { SessionService } from 'src/app/core/session/state/session.service';
import { User } from 'src/app/core/session/state/session.model';

@Component({
  selector: 'wyn-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {
  constructor(
    public sessionQuery: SessionQuery,
    private sessionService: SessionService
  ) {}

  ngOnInit() {}
  updateUser() {
    this.sessionService.login(
      new User('Javi', 'Cancela', 'asddasdassdasdqweqeqweq')
    );
  }
}
