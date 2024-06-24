import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss',
})
export class ShowTaskComponent {
  tasks: any[] = ['task1', 'task2', 'task3'];
  constructor(private taskService: TaskService){}
  ngOnInit() {
    this.taskService.mySubject.subscribe((value:string) => {
      this.tasks.push(value)
    });
  }
}
