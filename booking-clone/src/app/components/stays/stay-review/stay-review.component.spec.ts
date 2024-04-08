import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayReviewComponent } from './stay-review.component';

describe('StayReviewComponent', () => {
  let component: StayReviewComponent;
  let fixture: ComponentFixture<StayReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StayReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
