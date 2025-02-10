import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botoes.component.html',
  styleUrl: './botoes.component.scss'
})
export class BotoesComponent {
  numbers: number[] = [9,8,7,6,5,4,3,2,1,0]

  @Output() numeroClicado = new EventEmitter<number>();
inputValues: any;
adicionarNumero: any;

  ObterNumeroClicado(numero: number )

  {
    this.numeroClicado.emit(numero)
  }

}
