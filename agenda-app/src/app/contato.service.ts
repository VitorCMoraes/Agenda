import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor( private http: HttpClient ) { 

  }

  save( contato: Contato ) : Observable<Contato> {
    return this.http.post<Contato>('http://localhost:8080/api/contatos', contato)
  }

  getContato() : Contato {
    let contato: Contato = new Contato()
    contato.name = 'Vitor Cardoso'
    contato.number = 62999148580
    return contato
  }
}
