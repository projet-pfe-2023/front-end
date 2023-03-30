import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilConsignateurComponent } from './accueil-consignateur.component';

describe('AccueilConsignateurComponent', () => {
  let component: AccueilConsignateurComponent;
  let fixture: ComponentFixture<AccueilConsignateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilConsignateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilConsignateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
