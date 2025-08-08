import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinbackPenetrationComponent } from './winback-penetration.component';

describe('WinbackPenetrationComponent', () => {
  let component: WinbackPenetrationComponent;
  let fixture: ComponentFixture<WinbackPenetrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinbackPenetrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinbackPenetrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
