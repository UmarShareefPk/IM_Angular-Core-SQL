import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeDropdownComponent } from './assignee-dropdown.component';

describe('AssigneeDropdownComponent', () => {
  let component: AssigneeDropdownComponent;
  let fixture: ComponentFixture<AssigneeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigneeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
