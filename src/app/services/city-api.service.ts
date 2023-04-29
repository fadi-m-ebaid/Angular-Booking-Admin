import { ICity } from './../models/icity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityApiService {

 
  private httpOptionHeaders = {};

  constructor(private httpClient: HttpClient) {

    this.httpOptionHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getAllAdmins(): Observable<ICity[]> {
    return this.httpClient.get<ICity[]>(`${environment.APIBaseURL}/Cities`);
  }

  getAdminById(id: string): Observable<ICity> {
    return this.httpClient.get<ICity>(`${environment.APIBaseURL}/Cities/${id}`);
  }

}
