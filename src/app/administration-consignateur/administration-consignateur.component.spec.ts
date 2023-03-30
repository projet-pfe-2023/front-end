import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationConsignateurComponent } from './administration-consignateur.component';

describe('AdministrationConsignateurComponent', () => {
  let component: AdministrationConsignateurComponent;
  let fixture: ComponentFixture<AdministrationConsignateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationConsignateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationConsignateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
