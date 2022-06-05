import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tasks } from '../datas/tasks';
import { CreateTask, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

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
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        tasks.splice(i, 1);
      }
    }

    return of(true);
  }

  createTask(task: CreateTask): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/task', task);
  }
}
