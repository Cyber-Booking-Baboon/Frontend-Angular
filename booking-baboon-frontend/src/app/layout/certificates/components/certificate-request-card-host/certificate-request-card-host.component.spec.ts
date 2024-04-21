import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestCardHostComponent } from './certificate-request-card-host.component';

describe('CertificateRequestCardHostComponent', () => {
  let component: CertificateRequestCardHostComponent;
  let fixture: ComponentFixture<CertificateRequestCardHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateRequestCardHostComponent]
    });
    fixture = TestBed.createComponent(CertificateRequestCardHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
