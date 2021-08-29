import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Last5mostAssignedToUsersComponent } from './last5most-assigned-to-users.component';

describe('Last5mostAssignedToUsersComponent', () => {
  let component: Last5mostAssignedToUsersComponent;
  let fixture: ComponentFixture<Last5mostAssignedToUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Last5mostAssignedToUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Last5mostAssignedToUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
