import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionDetailsComponent } from './attraction-details.component';

describe('AttractionDetailsComponent', () => {
  let component: AttractionDetailsComponent;
  let fixture: ComponentFixture<AttractionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttractionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
