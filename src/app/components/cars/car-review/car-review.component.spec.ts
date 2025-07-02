import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReviewComponent } from './car-review.component';

describe('CarReviewComponent', () => {
  let component: CarReviewComponent;
  let fixture: ComponentFixture<CarReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
