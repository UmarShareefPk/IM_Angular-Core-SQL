import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpibarComponent } from './kpibar.component';

describe('KpibarComponent', () => {
  let component: KpibarComponent;
  let fixture: ComponentFixture<KpibarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpibarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
