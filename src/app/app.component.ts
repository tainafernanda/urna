import { Component } from '@angular/core';
import { BotoesComponent } from "./botoes/botoes.component";
import { BotoesUrnaComponent } from "./botoes-urna/botoes-urna.component";
import { FotosComponent } from "./fotos/fotos.component";
import { ProfissaoNumeroNomeComponent } from "./profissao-numero-nome/profissao-numero-nome.component";

@Component({
  selector: 'app-urna',
  imports: [BotoesComponent, BotoesUrnaComponent, FotosComponent, ProfissaoNumeroNomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}