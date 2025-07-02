import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarExtraComponent } from './car-extra.component';

describe('CarExtraComponent', () => {
  let component: CarExtraComponent;
  let fixture: ComponentFixture<CarExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarExtraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
