import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../users/models/user.model";
import {environment} from "../../env/env";
import {Certificate} from "./certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Certificate[]> {
    return this.httpClient.get<Certificate[]>(environment.apiHost + 'certificates')
  }
}
