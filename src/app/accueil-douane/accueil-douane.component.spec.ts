import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDouaneComponent } from './accueil-douane.component';

describe('AccueilDouaneComponent', () => {
  let component: AccueilDouaneComponent;
  let fixture: ComponentFixture<AccueilDouaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilDouaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilDouaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
