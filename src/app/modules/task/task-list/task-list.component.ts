import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filterBeginDate: Date | undefined;
  filterEndDate: Date | undefined;

  constructor(
    private taskService: TaskService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllTask();
  }

  onTaskRemove(task: Task) {
    this.taskService.removeTask(task.id)
      .subscribe(res => {
        if (res) {
          this.getAllTask();
        }
      });
  }

  getAllTask(): void {
    const currentUser = this.authService.getCurrentUser();
    this.taskService
      .getTasksByUserId(currentUser.id)
      .subscribe((tasks) => (this.tasks = tasks));
  }

  onTaskSelected(task: Task) {
    // console.log(task)
  }

  foo(dates: (Date | undefined)[] | undefined) {
    if (dates) {
      this.filterBeginDate = dates[0]
      this.filterEndDate = dates[1];
    }

    console.log(this.filterBeginDate);
    console.log(this.filterEndDate);
  }
}
