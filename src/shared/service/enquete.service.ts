import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  private readonly api_localhost = 'http://localhost:8000/api';
  private readonly api_server = 'https://websico.com.br/api';

  constructor(private http: HttpClient) {}

  sendResponse(valueForm: any): Observable<any> {
    return this.http.post(`${this.api_server}/register_psichology`, valueForm);
  }

  getComentarios(): Observable<any> {
    return this.http.get(`${this.api_server}/get_descriptions`)
  }

  getGender(): Observable<any> {
    return this.http.get(`${this.api_server}/graph/gender`);
  }

  getAge(): Observable<any> {
    return this.http.get(`${this.api_server}/graph/age`);
  }

  getState(): Observable<any> {
    return this.http.get(`${this.api_server}/graph/state`);
  }

  getPsychologyForm(): Observable<any> {
    return this.http.get(`${this.api_server}/graph/psychology_form`);
  }

  getPsychologyProcess(): Observable<any> {
    return this.http.get(`${this.api_server}/graph/psychology_process`);
  }

  getInteresse(): Observable<any> {
    return this.http.get(`${this.api_server}/graph/interesseFuturo`);
  }

  
}
