import {CertificateExtension} from "./certificate.extension";
import {SubjectDTO} from "./subject.dto";

export interface CertificateCreateDTO {
  alias: string;
  issuerAlias: string;
  subject: SubjectDTO;
  startDate: Date;
  endDate: Date;
  extensions: CertificateExtension[];
}
