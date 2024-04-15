import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsFilterModalComponent } from './flights-filter-modal.component';

describe('FlightsFilterModalComponent', () => {
  let component: FlightsFilterModalComponent;
  let fixture: ComponentFixture<FlightsFilterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsFilterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
