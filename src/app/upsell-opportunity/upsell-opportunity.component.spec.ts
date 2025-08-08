import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellOpportunityComponent } from './upsell-opportunity.component';

describe('UpsellOpportunityComponent', () => {
  let component: UpsellOpportunityComponent;
  let fixture: ComponentFixture<UpsellOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsellOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
