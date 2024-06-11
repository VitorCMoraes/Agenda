import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  adicionar: boolean = false;
  editar: boolean = false;

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
    this.adicionar = false
    this.editar = false
    console.log(this.editar)
  }
    
}
