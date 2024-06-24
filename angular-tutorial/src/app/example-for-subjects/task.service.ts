import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  mySubject = new Subject<string>();
  onCreateTask(value: string) {
    this.mySubject.next(value);
  }
}
