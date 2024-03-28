import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsComponent } from './boats.component';

describe('BoatsComponent', () => {
  let component: BoatsComponent;
  let fixture: ComponentFixture<BoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
