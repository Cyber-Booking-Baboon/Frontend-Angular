import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestsPageComponent } from './certificate-requests-page.component';

describe('CertificateRequestsPageComponent', () => {
  let component: CertificateRequestsPageComponent;
  let fixture: ComponentFixture<CertificateRequestsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateRequestsPageComponent]
    });
    fixture = TestBed.createComponent(CertificateRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
