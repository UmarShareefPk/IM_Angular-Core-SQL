import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListingComponent } from './incident-listing.component';

describe('IncidentListingComponent', () => {
  let component: IncidentListingComponent;
  let fixture: ComponentFixture<IncidentListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
