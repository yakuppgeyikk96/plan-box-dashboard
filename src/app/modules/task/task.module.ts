import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { ComponentModule } from '../../common/components/component.module';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    children: [],
  },
];

@NgModule({
  declarations: [TaskComponent, TaskListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentModule],
})
export class TaskModule {}
