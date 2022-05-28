import { NgModule } from '@angular/core';
import { ListBoxComponent } from './list-box/list-box.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListBoxComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ListBoxComponent],
})
export class ComponentModule {}
