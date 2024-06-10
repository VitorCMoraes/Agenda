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
  adicionar: boolean = true;
  editar: boolean = false;

  ngOnInit(): void {

  }

  onSubmit() {
    this.adicionar = false
    this.editar = false
  }
    
}
