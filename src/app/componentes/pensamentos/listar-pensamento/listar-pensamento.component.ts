import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'qwer',
      autoria: 'abc',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular love Angular',
      autoria: 'Nay',
      modelo: 'modelo1'
    }
  ];
}
