import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManifestComponent } from './form-manifest.component';

describe('FormManifestComponent', () => {
  let component: FormManifestComponent;
  let fixture: ComponentFixture<FormManifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormManifestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
