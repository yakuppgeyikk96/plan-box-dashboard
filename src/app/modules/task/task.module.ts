import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    children: [],
  },
];

@NgModule({
  declarations: [TaskComponent, TaskListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TaskModule {}
