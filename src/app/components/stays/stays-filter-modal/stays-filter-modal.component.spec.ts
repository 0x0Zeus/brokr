import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysFilterModalComponent } from './stays-filter-modal.component';

describe('StaysFilterModalComponent', () => {
  let component: StaysFilterModalComponent;
  let fixture: ComponentFixture<StaysFilterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysFilterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaysFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
