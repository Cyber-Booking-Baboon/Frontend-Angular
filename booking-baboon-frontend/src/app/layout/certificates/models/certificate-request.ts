import {CertificateExtension} from "./certificate.extension";

export interface CertificateRequest{
  alias: string;
  issuerAlias: string;

  subjectCN: string;
  subjectSurname: string;
  subjectGivenName: string;
  subjectO: string;
  subjectOU: string;
  subjectC: string;
  subjectE: string;
  subjectUID: string;
  startDate: Date;
  endDate: Date;

  status: CertificateRequestStatus;
  extensions: CertificateExtension[];
}

export enum CertificateRequestStatus{
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DENIED = "DENIED"
}
