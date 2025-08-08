import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwaterfallComponent } from './customerwaterfall.component';

describe('CustomerwaterfallComponent', () => {
  let component: CustomerwaterfallComponent;
  let fixture: ComponentFixture<CustomerwaterfallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwaterfallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerwaterfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
