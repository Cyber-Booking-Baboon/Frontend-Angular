import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {
  private blacklistUrl = '../../../../assets/passwords_blacklist.txt';
  private maxPasswords = 2000; //MAXLENGTH - 488130

  constructor(private http: HttpClient) {}

  getBlacklist(): Observable<string[]> {
    return this.http.get(this.blacklistUrl, { responseType: 'text' })
      .pipe(
        map(data => data.split('\n').map(password => password.trim()).slice(0, this.maxPasswords))
      );
  }

}
