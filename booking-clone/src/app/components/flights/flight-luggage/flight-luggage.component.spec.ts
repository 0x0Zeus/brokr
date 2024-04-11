import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLuggageComponent } from './flight-luggage.component';

describe('FlightLuggageComponent', () => {
  let component: FlightLuggageComponent;
  let fixture: ComponentFixture<FlightLuggageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightLuggageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightLuggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
