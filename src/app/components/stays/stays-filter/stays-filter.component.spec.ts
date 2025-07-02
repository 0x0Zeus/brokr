import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysFilterComponent } from './stays-filter.component';

describe('StaysFilterComponent', () => {
  let component: StaysFilterComponent;
  let fixture: ComponentFixture<StaysFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaysFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
