import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  private readonly api_localhost = 'http://localhost:8000/api';
  private readonly api_server = 'https://websico.com.br/api'

  constructor(private http: HttpClient) { }

  sendResponse(valueForm: any): Observable<any> {
    return this.http.post(`${this.api_server}/register_psichology`, valueForm);
  }
}
