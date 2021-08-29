import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Last5Component } from './last5.component';

describe('Last5Component', () => {
  let component: Last5Component;
  let fixture: ComponentFixture<Last5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Last5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Last5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
