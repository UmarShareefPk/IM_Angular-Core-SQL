import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAssignedToUsersComponent } from './most-assigned-to-users.component';

describe('MostAssignedToUsersComponent', () => {
  let component: MostAssignedToUsersComponent;
  let fixture: ComponentFixture<MostAssignedToUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostAssignedToUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostAssignedToUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
