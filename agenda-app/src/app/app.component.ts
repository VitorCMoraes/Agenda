import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contato } from './contato';
import { ContatoService } from './contato.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ ContatoService]
})
export class AppComponent implements OnInit {
  contato: Contato

  adicionar: boolean = false
  editar: boolean = false

  constructor( private service: ContatoService ) {
    this.contato = new Contato()
  }

  ngOnInit(): void {

  }

  adicionarContato() {
    this.adicionar = true
    this.editar = false
  }

  editarContato() {
    this.editar = true
    this.adicionar = false
  }

  onSubmit() {
    this.service.save(this.contato)
                .subscribe( response => {
                  console.log(response)
                })

    this.adicionar = false
    this.editar = false
  }
    
}
