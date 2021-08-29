import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallWidgetComponent } from './overall-widget.component';

describe('OverallWidgetComponent', () => {
  let component: OverallWidgetComponent;
  let fixture: ComponentFixture<OverallWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
