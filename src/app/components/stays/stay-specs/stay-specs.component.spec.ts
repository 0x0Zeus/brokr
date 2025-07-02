import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaySpecsComponent } from './stay-specs.component';

describe('StaySpecsComponent', () => {
  let component: StaySpecsComponent;
  let fixture: ComponentFixture<StaySpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaySpecsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaySpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
