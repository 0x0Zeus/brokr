import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReviewsComponent } from './car-reviews.component';

describe('CarReviewsComponent', () => {
  let component: CarReviewsComponent;
  let fixture: ComponentFixture<CarReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
