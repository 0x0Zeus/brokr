import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFilterComponent } from './cars-filter.component';

describe('CarsFilterComponent', () => {
  let component: CarsFilterComponent;
  let fixture: ComponentFixture<CarsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
