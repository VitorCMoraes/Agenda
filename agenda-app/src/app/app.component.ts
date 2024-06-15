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
  pesquisar: string = ''


  constructor( private service: ContatoService ) {
    this.contato = new Contato()
  }

  ngOnInit(): void {
    if(this.pesquisar) {
      this.service.getSearch(this.pesquisar)
                  .subscribe( response => this.contatos = response)
    } else {
      this.service.getContatos()
                  .subscribe( response => this.contatos = response )
    }
  }

  pesquisarContato() {
    this.ngOnInit()
  }

  adicionarContato() {
    this.adicionar = true
    this.editar = false
    
    this.contato.id = null
    this.contato.name = ''
    this.contato.number = null
  }

  cancelar() {
    this.adicionar = false
    this.editar = false
  }

  editarContato(id: number) {
    this.editar = true
    this.adicionar = false

    this.service.getContatoById(id)
                .subscribe( response => this.contato = response )
  }

  deletarContato(contato: Contato) {
    const confirmacao = confirm(`Você tem certeza que deseja excluir ${contato.name}`);
    if(confirmacao){
      this.service.delete(contato.id)
                  .subscribe( response => {
                    this.ngOnInit()
                  })
    }
  }

  deletarPesquisa() {
    this.pesquisar = ''
    this.ngOnInit()
  }

  onSubmit() {
    if(this.adicionar) {
      this.service.save(this.contato)
                  .subscribe( response => {
                    this.ngOnInit()
                  })
      this.adicionar = false
    } else {
      this.service.put(this.contato)
                  .subscribe( response => {
                    this.ngOnInit()
                  })
      this.editar = false
    }
  }

  
}
