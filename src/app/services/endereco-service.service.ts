import { Injectable } from '@angular/core';
import { Endereco } from '../endereco';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoServiceService {
  API_url = "https://viacep.com.br/ws/"


  constructor(
    private http: HttpClient
  ) { }

  consultaCep(cep: string): Observable<Endereco> {
    const url = (`${this.API_url}/${cep}/json`)
    return this.http.get<Endereco>(url)
  }
}
