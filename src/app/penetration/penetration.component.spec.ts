import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenetrationComponent } from './penetration.component';

describe('PenetrationComponent', () => {
  let component: PenetrationComponent;
  let fixture: ComponentFixture<PenetrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenetrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenetrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
