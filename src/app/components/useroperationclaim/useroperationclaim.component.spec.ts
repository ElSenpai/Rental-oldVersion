import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroperationclaimComponent } from './useroperationclaim.component';

describe('UseroperationclaimComponent', () => {
  let component: UseroperationclaimComponent;
  let fixture: ComponentFixture<UseroperationclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseroperationclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroperationclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
