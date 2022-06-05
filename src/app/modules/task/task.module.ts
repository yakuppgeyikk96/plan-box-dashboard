import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { ComponentModule } from '../../common/components/component.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {ListBoxComponent} from "./task-list/list-box/list-box.component";
import {TooltipModule} from "ngx-bootstrap/tooltip"
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'task-detail',
    component: TaskDetailComponent
  }
];

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    ListBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    TooltipModule,
    BsDatepickerModule.forRoot()
  ],
})
export class TaskModule {}
