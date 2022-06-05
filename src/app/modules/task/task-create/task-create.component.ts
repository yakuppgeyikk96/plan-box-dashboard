import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  createTaskForm: FormGroup;
  title?: string;
  closeBtnName?: string;
  list: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createTaskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    });
  }

  createTask() {
    const createTaskData = this.createTaskForm.value;
    this.taskService.createTask(createTaskData).subscribe((task) => {
      if (task) {
        this.bsModalRef.hide();
      }
    });
  }
}
