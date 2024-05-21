import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCertificateRequestPageComponent } from './issue-certificate-request-page.component';

describe('IssueCertificateRequestPageComponent', () => {
  let component: IssueCertificateRequestPageComponent;
  let fixture: ComponentFixture<IssueCertificateRequestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueCertificateRequestPageComponent]
    });
    fixture = TestBed.createComponent(IssueCertificateRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
