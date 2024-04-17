import { Injectable } from '@angular/core';
import {Guest} from "../models/guest.model";
import {Observable} from "rxjs";
import {environment} from "../../../env/env";
import {HttpClient} from "@angular/common/http";
import {Admin} from "../models/admin.model";
import {SysAdmin} from "../models/sys.admin.model";

@Injectable({
  providedIn: 'root'
})
export class SysAdminService {

  constructor(private httpClient: HttpClient) { }

  update(sysadmin: SysAdmin): Observable<Admin> {
    return this.httpClient.put<Admin>(environment.apiHost + 'sysadmin/', sysadmin)
  }
}
