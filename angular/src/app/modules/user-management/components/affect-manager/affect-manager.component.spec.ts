import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectManagerComponent } from './affect-manager.component';

describe('AffectManagerComponent', () => {
  let component: AffectManagerComponent;
  let fixture: ComponentFixture<AffectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
