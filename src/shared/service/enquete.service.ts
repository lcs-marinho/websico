import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  private readonly api = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  sendResponse(valueForm: any): Observable<any> {
    return this.http.post(`${this.api}/register_psichology`, valueForm);
  }
}
