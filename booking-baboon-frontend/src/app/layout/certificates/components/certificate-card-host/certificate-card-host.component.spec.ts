import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCardHostComponent } from './certificate-card-host.component';

describe('CertificateCardHostComponent', () => {
  let component: CertificateCardHostComponent;
  let fixture: ComponentFixture<CertificateCardHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateCardHostComponent]
    });
    fixture = TestBed.createComponent(CertificateCardHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
