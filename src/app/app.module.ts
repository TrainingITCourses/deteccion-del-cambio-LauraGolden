import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellContainerComponent } from './core/shell-container/shell-container.component';
import { SearchComponent} from './search/search.component';
import { LaunchesListComponent } from './shared/launches-list/launches-list.component';
import { CriterionComponent } from './shared/criterion/criterion.component';
import { SearchFiltreComponent } from './shared/search-filtre/search-filtre.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellContainerComponent,
    SearchComponent,
    LaunchesListComponent,
    CriterionComponent,
    SearchFiltreComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
