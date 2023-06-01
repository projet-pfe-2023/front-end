import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDouaneComponent } from './administration-douane.component';

describe('AdministrationDouaneComponent', () => {
  let component: AdministrationDouaneComponent;
  let fixture: ComponentFixture<AdministrationDouaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationDouaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationDouaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
