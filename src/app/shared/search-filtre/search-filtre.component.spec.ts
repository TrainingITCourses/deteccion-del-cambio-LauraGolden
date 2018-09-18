import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltreComponent } from './search-filtre.component';

describe('SearchFiltreComponent', () => {
  let component: SearchFiltreComponent;
  let fixture: ComponentFixture<SearchFiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
