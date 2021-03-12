import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationclaimComponent } from './operationclaim.component';

describe('OperationclaimComponent', () => {
  let component: OperationclaimComponent;
  let fixture: ComponentFixture<OperationclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
