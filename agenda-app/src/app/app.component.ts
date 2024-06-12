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
    if(this.adicionar) {
      this.service.save(this.contato)
                  .subscribe( response => {
                    console.log(response)
                  })
      this.adicionar = false
    } else {
      


      this.editar = false
    }

    this.adicionar = false
    this.editar = false
  }
}
