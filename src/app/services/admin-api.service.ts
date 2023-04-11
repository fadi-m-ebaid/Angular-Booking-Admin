import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../models/i-admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private httpOptionHeaders = {};

  constructor(private httpClient: HttpClient) {

    this.httpOptionHeaders = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
  }

  getAllAdmins():Observable<IAdmin[]>{
    return this.httpClient.get<IAdmin[]>(`${environment.APIBaseURL}/Admins`);
  }


}
