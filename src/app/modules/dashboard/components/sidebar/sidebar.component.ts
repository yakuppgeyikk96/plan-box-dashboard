import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../common/services/navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  showSidebar: boolean = false;
  sidebarItems: { icon: string; text: string; link: string }[] = [
    {
      icon: 'fa-solid fa-house',
      text: 'Home',
      link: '',
    },
    {
      icon: 'fa-solid fa-list-check',
      text: 'Tasks',
      link: 'task',
    },
  ];

  constructor(private navigationService: NavigationService) {
    navigationService.toggleSidebar.subscribe((res) => {
      this.showSidebar = res;
    });
  }

  ngOnInit(): void {}
}
