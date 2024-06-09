import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CertificateRequest} from "../models/certificate-request";
import {environment} from "../../../env/env";
import {Certificate} from "../models/certificate";
import {Reservation} from "../../reservations/models/reservation.model";


@Injectable({
  providedIn: 'root'
})
export class CertificateRequestService {

  constructor(private httpClient: HttpClient) {
  }

  getAllForHost(id: number|undefined):Observable<CertificateRequest[]>{
    return this.httpClient.get<CertificateRequest[]>(environment.apiHost + 'certificate-requests/host/' + id);
  }

  getAll(): Observable<CertificateRequest[]> {
    return this.httpClient.get<CertificateRequest[]>(environment.apiHost + 'certificate-requests')
  }

  getCertificateForHost(id: number):Observable<Certificate>{
  return this.httpClient.get<Certificate>(environment.apiHost + 'certificate-requests/certificate/host/' + id);
  }

  getAllPending(): Observable<CertificateRequest[]> {
    return this.httpClient.get<CertificateRequest[]>(environment.apiHost + 'certificate-requests/pending')
  }

  approve(id: number): Observable<CertificateRequest>{
    return this.httpClient.post<CertificateRequest>(environment.apiHost + 'certificate-requests/' + id + '/approve', {})
  }

  deny(id: number): Observable<CertificateRequest>{
    return this.httpClient.put<CertificateRequest>(environment.apiHost + 'certificate-requests/' + id + '/deny', {})
  }

  create(request:CertificateRequest): Observable<CertificateRequest> {
    return this.httpClient.post<CertificateRequest>(environment.apiHost + 'certificate-requests',request)
  }

}
