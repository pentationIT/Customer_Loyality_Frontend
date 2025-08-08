import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketmovementComponent } from './bucketmovement.component';

describe('BucketmovementComponent', () => {
  let component: BucketmovementComponent;
  let fixture: ComponentFixture<BucketmovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketmovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
