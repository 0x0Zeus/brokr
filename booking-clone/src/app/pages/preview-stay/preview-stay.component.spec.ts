import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStayComponent } from './preview-stay.component';

describe('PreviewStayComponent', () => {
  let component: PreviewStayComponent;
  let fixture: ComponentFixture<PreviewStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewStayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
