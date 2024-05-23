import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationUserComponent } from './affectation-user.component';

describe('AffectationUserComponent', () => {
  let component: AffectationUserComponent;
  let fixture: ComponentFixture<AffectationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
