import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'task',
    loadChildren: () => import('../task/task.module').then((m) => m.TaskModule),
  },
];

@NgModule({
  declarations: [NavbarComponent, DashboardComponent, SidebarComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [DashboardComponent],
})
export class DashboardModule {}
