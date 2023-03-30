import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaissementComponent } from './connaissement.component';

describe('ConnaissementComponent', () => {
  let component: ConnaissementComponent;
  let fixture: ComponentFixture<ConnaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnaissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
