import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestFormComponent } from './certificate-request-form.component';

describe('CertificateRequestFormComponent', () => {
  let component: CertificateRequestFormComponent;
  let fixture: ComponentFixture<CertificateRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateRequestFormComponent]
    });
    fixture = TestBed.createComponent(CertificateRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
