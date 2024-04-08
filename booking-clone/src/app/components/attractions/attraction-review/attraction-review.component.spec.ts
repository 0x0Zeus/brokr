import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionReviewComponent } from './attraction-review.component';

describe('AttractionReviewComponent', () => {
  let component: AttractionReviewComponent;
  let fixture: ComponentFixture<AttractionReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AttractionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
