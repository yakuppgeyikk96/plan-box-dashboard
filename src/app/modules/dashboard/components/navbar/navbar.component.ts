import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../../../common/services/navigation.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showSidebar: boolean = false;
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    if (this.showSidebar) {
      this.navigationService.toggleSidebar.next(false);
      this.showSidebar = false;
    }
    else {
      this.navigationService.toggleSidebar.next(true);
      this.showSidebar = true;
    }
  }
}
