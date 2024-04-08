import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsFilterComponent } from './attractions-filter.component';

describe('AttractionsFilterComponent', () => {
  let component: AttractionsFilterComponent;
  let fixture: ComponentFixture<AttractionsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionsFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AttractionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
