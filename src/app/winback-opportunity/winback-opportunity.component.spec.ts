import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinbackOpportunityComponent } from './winback-opportunity.component';

describe('WinbackOpportunityComponent', () => {
  let component: WinbackOpportunityComponent;
  let fixture: ComponentFixture<WinbackOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinbackOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinbackOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
