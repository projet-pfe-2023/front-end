import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormulaireComponent } from './gestion-formulaire.component';

describe('GestionFormulaireComponent', () => {
  let component: GestionFormulaireComponent;
  let fixture: ComponentFixture<GestionFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
