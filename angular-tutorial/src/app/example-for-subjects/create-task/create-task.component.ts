import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  newTask: string = '';
  constructor(private taskService: TaskService) {}
  onCreateTask() {
    this.taskService.onCreateTask(this.newTask);
  }
  ngOnInit() {
    const data = ajax('https://randomuser.me/api/');
    /* for observable start */
    // data.subscribe((data) => {
    //   console.log(data);
    // });

    // data.subscribe((data) => {
    //   console.log(data);
    // });

    // data.subscribe((data) => {
    //   console.log(data);
    // });
    /* for observable end */

    /* for subject start */
    const newSub = new Subject();

    data.subscribe(newSub);

    newSub.subscribe((data) => {
      console.log(data);
    });
    newSub.subscribe((data) => {
      console.log(data);
    });
    newSub.subscribe((data) => {
      console.log(data);
    });
    /* for subject end */
  }
}
