import {CertificateExtension} from "./certificate.extension";

export interface CertificateRequest{
  id: number

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
  startDate: string;
  endDate: string;

  status: CertificateRequestStatus;
  extensions: CertificateExtension[];
}

export enum CertificateRequestStatus{
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DENIED = "DENIED"
}
