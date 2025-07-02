import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ToasterContainerComponent } from '.';

describe('ToasterContainerComponent', () => {
  let component: ToasterContainerComponent;
  let fixture: ComponentFixture<ToasterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterContainerComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToasterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
