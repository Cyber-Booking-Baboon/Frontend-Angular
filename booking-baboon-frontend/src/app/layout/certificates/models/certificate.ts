import {AccommodationType} from "../../accommodations/shared/models/accommodation-type.model";
import {SubjectDTO} from "./subject.dto";
import {CertificateExtension} from "./certificate.extension";
import {Subject} from "./subject";

export interface Certificate {
  alias: string;
  subject: Subject;
  startDate: string;
  endDate: string;
  extensions: CertificateExtension[];
}
