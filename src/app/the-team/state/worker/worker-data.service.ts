import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { List } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { Worker } from './worker.model';

@Injectable({ providedIn: 'root' })
export class WorkerDataService {
  constructor(private http: HttpClient) {}

  getWorkers(): Observable<Worker[]> {
    return this.http
      .get<List<Worker[]>>('http://localhost:8081/workers')
      .pipe(map(worker => worker.content));
  }
}
