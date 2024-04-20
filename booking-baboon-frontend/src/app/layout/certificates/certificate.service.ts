import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../users/models/user.model";
import {environment} from "../../env/env";
import {Certificate} from "./models/certificate";
import {CertificateDTO} from "./models/certificate.dto";

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

}
