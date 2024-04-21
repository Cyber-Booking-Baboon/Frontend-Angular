import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CertificateRequest} from "../models/certificate-request";
import {environment} from "../../../env/env";


@Injectable({
  providedIn: 'root'
})
export class CertificateRequestService {

  constructor(private httpClient: HttpClient) {
  }

  getAllForHost(id: number|undefined):Observable<CertificateRequest>{
    return this.httpClient.get<CertificateRequest>(environment.apiHost + 'certificate-requests/host/' + id);
  }

  getAll(): Observable<CertificateRequest[]> {
    return this.httpClient.get<CertificateRequest[]>(environment.apiHost + 'certificate-requests')
  }
}
