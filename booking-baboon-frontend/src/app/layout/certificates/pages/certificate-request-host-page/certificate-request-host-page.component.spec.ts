import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestHostPageComponent } from './certificate-request-host-page.component';

describe('CertificateRequestHostPageComponent', () => {
  let component: CertificateRequestHostPageComponent;
  let fixture: ComponentFixture<CertificateRequestHostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateRequestHostPageComponent]
    });
    fixture = TestBed.createComponent(CertificateRequestHostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
