import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profissao-numero-nome',
  templateUrl: './profissao-numero-nome.component.html',
  styleUrls: ['./profissao-numero-nome.component.scss']
})
export class ProfissaoNumeroNomeComponent {
  @Input() profession: string | null = null; // Recebe a profissão do componente pai
  @Input() inputValues: string[] = []; // Recebe os valores dos números do componente pai
  @Input() name: string | null = null; // Recebe o nome do componente pai
selectedCharacter: any;

  // Método para exibir os números formatados
  getFormattedNumbers(): string {
    return this.inputValues.join(' '); // Exemplo de formatação
  }
}
