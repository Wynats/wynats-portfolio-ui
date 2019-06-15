import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/core/session/state/session.query';
import { SessionService } from 'src/app/core/session/state/session.service';
import { User } from 'src/app/core/session/state/session.model';
import { Worker, WorkerQuery, WorkerService } from '../../state/worker';
import { Observable } from 'rxjs';

@Component({
  selector: 'wyn-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {
  workers$: Observable<Array<Worker>>;
  workersReduced$;

  constructor(
    public sessionQuery: SessionQuery,
    private sessionService: SessionService,
    public workerQuery: WorkerQuery,
    private workerService: WorkerService
  ) {}

  ngOnInit() {
    this.updateUser();
    this.workerService.getWorkers().subscribe();
    this.workers$ = this.workerQuery.selectAll();
  }
  private updateUser() {
    this.sessionService.login(
      new User('Javi', 'Cancela', 'asddasdassdasdqweqeqweq')
    );
  }
}
