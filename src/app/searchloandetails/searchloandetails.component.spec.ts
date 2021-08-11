import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchloandetailsComponent } from './searchloandetails.component';

describe('SearchloandetailsComponent', () => {
  let component: SearchloandetailsComponent;
  let fixture: ComponentFixture<SearchloandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchloandetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
