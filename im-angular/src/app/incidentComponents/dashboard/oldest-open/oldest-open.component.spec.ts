import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestOpenComponent } from './oldest-open.component';

describe('OldestOpenComponent', () => {
  let component: OldestOpenComponent;
  let fixture: ComponentFixture<OldestOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldestOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
