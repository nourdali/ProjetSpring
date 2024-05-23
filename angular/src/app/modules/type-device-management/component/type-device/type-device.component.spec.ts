import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeviceComponent } from './type-device.component';

describe('TypeDeviceComponent', () => {
  let component: TypeDeviceComponent;
  let fixture: ComponentFixture<TypeDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
