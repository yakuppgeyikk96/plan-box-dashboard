import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tasks } from '../datas/tasks';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasksByUserId(userId: string): Observable<Task[]> {
    const userTasks: Task[] = [];

    tasks.forEach((task) => {
      if (task.userId === userId) {
        userTasks.push(task);
      }
    });

    return of<Task[]>(userTasks);
  }

  removeTask(taskId: string): Observable<boolean> {
    for (let i=0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        tasks.splice(i, 1);
      }
    }

    return of(true);
  }
}
