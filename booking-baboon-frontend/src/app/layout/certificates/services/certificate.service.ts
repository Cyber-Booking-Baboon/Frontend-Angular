import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certificate} from "../models/certificate";
import {environment} from "../../../env/env";
import {CertificateCreateDTO} from "../models/certificate.dto";
import {CertificateExtension} from "../models/certificate.extension";


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  constructor(private httpClient: HttpClient) {
  }

  get(alias: string): Observable<Certificate> {
  return this.httpClient.get<Certificate>(environment.pkiHost + 'certificates/' + alias)
  }

  getAllChildren(alias : string): Observable<Certificate[]> {
    return this.httpClient.get<Certificate[]>(environment.pkiHost + 'certificates/' + alias + '/children')
  }

  issueCertificate(certificate: CertificateCreateDTO): Observable<Certificate> {
    return this.httpClient.post<Certificate>(environment.pkiHost + 'certificates', certificate)
  }

  checkAliasUniqueness(alias: string) : Observable<boolean>{
    return this.httpClient.get<boolean>(environment.pkiHost + 'certificates/unique/' + alias)
  }

  getExtensions(alias : string): Observable<CertificateExtension[]>{
    return this.httpClient.get<CertificateExtension[]>(environment.pkiHost + 'certificates/extensions/' + alias)
  }

}
