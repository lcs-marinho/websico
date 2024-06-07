import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  private readonly api_localhot = 'http://localhost:8000/api';
  private readonly api_server = '/3.22.172.61/api'

  constructor(private http: HttpClient) { }

  sendResponse(valueForm: any): Observable<any> {
    return this.http.post(`${this.api_server}/register_psichology`, valueForm);
  }
}
