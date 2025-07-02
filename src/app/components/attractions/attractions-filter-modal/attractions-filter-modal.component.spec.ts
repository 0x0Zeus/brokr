import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsFilterModalComponent } from './attractions-filter-modal.component';

describe('AttractionsFilterModalComponent', () => {
  let component: AttractionsFilterModalComponent;
  let fixture: ComponentFixture<AttractionsFilterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionsFilterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttractionsFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
