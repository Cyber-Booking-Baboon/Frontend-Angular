import {CertificateExtension} from "./certificate.extension";
import {SubjectDTO} from "./subject.dto";

export interface CertificateDTO {
  alias: string;
  subject: SubjectDTO;
  startDate: Date;
  endDate: Date;
  extensions: CertificateExtension[];
}
