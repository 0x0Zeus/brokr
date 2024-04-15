import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMobileComponent } from './navigation-mobile.component';

describe('NavigationMobileComponent', () => {
  let component: NavigationMobileComponent;
  let fixture: ComponentFixture<NavigationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
