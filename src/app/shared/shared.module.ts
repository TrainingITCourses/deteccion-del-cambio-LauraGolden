import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesListComponent } from './launches-list/launches-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LaunchesListComponent],
  exports: [LaunchesListComponent]
})
export class SharedModule { }
