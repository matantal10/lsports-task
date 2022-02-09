import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEventTableComponent } from './sport-event-table.component';

describe('SportEventTableComponent', () => {
  let component: SportEventTableComponent;
  let fixture: ComponentFixture<SportEventTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportEventTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
