import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  baseURL: string = 'http://localhost:8080/api/contatos'

  constructor( private http: HttpClient ) {}

  save( contato: Contato ) : Observable<Contato> {
    return this.http.post<Contato>(`${this.baseURL}`, contato)
  }

  getContatos() : Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseURL}`)
  }

  getSearch(texto: string) : Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseURL}/buscar?name=${texto}`)
  }

  getContatoById( id: number ) : Observable<Contato> {
    return this.http.get<Contato>(`${this.baseURL}/${id}`)
  }

  put( contato: Contato ) : Observable<Contato> {
    return this.http.put<Contato>(`${this.baseURL}/${contato.id}`, contato)
  }

  delete( id: number ) : Observable<Contato> {
    return this.http.delete<Contato>(`${this.baseURL}/${id}`)
  }

}
