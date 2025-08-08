import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcdataComponent } from './ppcdata.component';

describe('PpcdataComponent', () => {
  let component: PpcdataComponent;
  let fixture: ComponentFixture<PpcdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpcdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
