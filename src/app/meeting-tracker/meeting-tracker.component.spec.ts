import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTrackerComponent } from './meeting-tracker.component';

describe('MeetingTrackerComponent', () => {
  let component: MeetingTrackerComponent;
  let fixture: ComponentFixture<MeetingTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
