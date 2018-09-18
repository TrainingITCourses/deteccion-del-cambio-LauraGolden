import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { SearchComponent} from '../search/search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShellContainerComponent, SearchComponent],
  exports: [ShellContainerComponent]
})
export class CoreModule { }
