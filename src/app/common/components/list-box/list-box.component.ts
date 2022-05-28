import {
  AfterViewInit,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, Renderer2,
  ViewChild,
} from '@angular/core';
import {Task} from "../../../modules/task/models/task.model";

@Component({
  selector: 'list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss'],
})
export class ListBoxComponent implements OnInit {
  @ViewChild('d1') d1: ElementRef;
  @ViewChild('d2') d2: ElementRef;
  @Output() removeItem = new EventEmitter<Task>();
  @Output() selectItem = new EventEmitter<Task>();
  @Input() data: Task[] = [];
  @Input() showOrder: boolean = false;

  openedIndex: number;

  startDateRight: number;
  endDateLeft: number;

  progressRates: number[];

  constructor() {}

  ngOnInit(): void {}

  removeTask(item: Task): void {
    this.removeItem.emit(item);
  }

  itemSelected(item: Task, index: number): void {
    this.openedIndex = index;
    this.selectItem.emit(item);
  }


  trackItem(index: number, item: Task) {
    const {startDate, endDate} = item;
    const totalDiff = endDate.getTime()-startDate.getTime();
    let diffByToday;
    if (new Date() <= startDate) {
      diffByToday = 0;
    }
    else {
      diffByToday = new Date().getTime()-startDate.getTime();
    }

    const element = document.getElementById(`progress-line-${index}`);
    if (element) {
      element.style.width = `${(diffByToday / totalDiff) * 100}%`;
    }
  }
}
