import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { TaskCreateComponent } from '../task-create/task-create.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [BsModalService],
})
export class TaskListComponent implements OnInit {
  bsTaskCreateModal?: BsModalRef;
  tasks: Task[] = [];
  filterDateRange: Date[] = [];

  constructor(
    private taskService: TaskService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getAllTask();
  }

  onTaskRemove(task: Task) {
    console.log(task);
    this.taskService.removeTask(task._id).subscribe((res) => {
      if (res) {
        console.log(res);
        this.getAllTask();
      }
    });
  }

  getAllTask(): void {
    // const currentUser = this.authService.getCurrentUser();
    // this.taskService
    //   .getTasksByUserId(currentUser.id)
    //   .subscribe((tasks) => (this.tasks = tasks));

    this.taskService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onTaskSelected(task: Task) {
    // console.log(task)
  }

  createTask(): void {
    // this.router.navigate(['task', 'task-create']);
    const initialState: ModalOptions = {
      initialState: {
        title: 'Create Task',
      },
    };

    this.bsTaskCreateModal = this.modalService.show(
      TaskCreateComponent,
      initialState
    );

    this.bsTaskCreateModal.content.closeBtnName = 'Close';

    this.bsTaskCreateModal.onHide?.subscribe(() => this.getAllTask());
  }

  filterDateChange(value: (Date | undefined)[] | undefined): void {
    if (value) {
      value.forEach((val) => {
        if (val) {
          this.filterDateRange.push(val);
        }
      });
    }
  }

  filterByDateRange(): void {
    console.log(this.filterDateRange);
  }
}
