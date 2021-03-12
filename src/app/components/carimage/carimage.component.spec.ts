import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarimageComponent } from './carimage.component';

describe('CarimageComponent', () => {
  let component: CarimageComponent;
  let fixture: ComponentFixture<CarimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
