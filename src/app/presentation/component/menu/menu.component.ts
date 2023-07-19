import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Página inicial',
    },
    {
        label: 'Cardápio',
    },
    {
      label: 'Contato',
    },
    {
      label: 'Restaurante',
    },
    {
      label: 'Reserva',
    },
    {
      label: 'Redes sociais',
    }
    ];
  }



}
