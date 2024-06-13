import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor( private http: HttpClient ) {}

  save( contato: Contato ) : Observable<Contato> {
    return this.http.post<Contato>('http://localhost:8080/api/contatos', contato)
  }

  getContatos() : Observable<Contato[]> {
    return this.http.get<Contato[]>('http://localhost:8080/api/contatos')
  }

  getContatoById( id: number ) : Observable<Contato> {
    return this.http.get<Contato>(`http://localhost:8080/api/contatos/${id}`)
  }

  put( contato: Contato ) : Observable<Contato> {
    return this.http.put<Contato>(`http://localhost:8080/api/contatos/${contato.id}`, contato)
  }

  delete( id: number ) : Observable<Contato> {
    return this.http.delete<Contato>(`http://localhost:8080/api/contatos/${id}`)
  }

}
