import { Component } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contato: Contato
  contatos: Contato[]

  adicionar: boolean = false
  editar: boolean = false

  constructor( private service: ContatoService ) {
    this.contato = new Contato()
  }

  ngOnInit(): void {
    this.service.getContatos()
                .subscribe( response => this.contatos = response )
  }

  adicionarContato() {
    this.adicionar = true
    this.editar = false
  }

  editarContato(id: number) {
    console.log(id)
    this.service.getContatoById(id)
                .subscribe( response => this.contato = response )
    this.editar = true
    this.adicionar = false
  }

  deletarContato(id: number) {
    this.service.delete(id)
                .subscribe( response => {
                  console.log(response)
                })
  }

  onSubmit() {
    if(this.adicionar) {
      this.service.save(this.contato)
                  .subscribe( response => {
                    console.log(response)
                  })
      this.adicionar = false
    } else {
      this.service.put(this.contato)
                  .subscribe( response => {
                    console.log(response)
                  })
      this.editar = false
    }
  }
}
