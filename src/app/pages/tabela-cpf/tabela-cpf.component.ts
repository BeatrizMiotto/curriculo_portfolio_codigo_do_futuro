import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';

@Component({
  selector: 'app-tabela-cpf',
  templateUrl: './tabela-cpf.component.html',
  styleUrls: ['./tabela-cpf.component.css']
})
export class TabelaCPFComponent implements OnInit {

  constructor() { }

  public clientes: Cliente[]=[
    {
      id: 1,
      nome: 'Alanis',
      cpf: 36985214712,
      telefone: 11856475985,
      data: new Date()
    },
    {
      id: 2,
      nome: 'Jasmine',
      cpf: 75698745632,
      telefone: 11195736587,
      data: new Date()
    },
    {
      id: 3,
      nome: 'Eduardo',
      cpf: 96528634851,
      telefone: 11698715286,
      data: new Date()
    },
    {
      id: 4,
      nome: 'Bruce',
      cpf: 46987536742,
      telefone: 11987365482,
      data: new Date()
    }
  ]

  ngOnInit(): void {
  }

}
