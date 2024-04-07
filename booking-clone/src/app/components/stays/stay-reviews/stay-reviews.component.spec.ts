import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayReviewsComponent } from './stay-reviews.component';

describe('StayReviewsComponent', () => {
  let component: StayReviewsComponent;
  let fixture: ComponentFixture<StayReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayReviewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StayReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
