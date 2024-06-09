import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestCardsHostComponent } from './certificate-request-cards-host.component';

describe('CertificateRequestCardsHostComponent', () => {
  let component: CertificateRequestCardsHostComponent;
  let fixture: ComponentFixture<CertificateRequestCardsHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateRequestCardsHostComponent]
    });
    fixture = TestBed.createComponent(CertificateRequestCardsHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
