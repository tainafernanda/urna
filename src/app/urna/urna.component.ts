import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  image: string; // URL da imagem do personagem
  profession: string; // Profissão do personagem
}

const characterCombinations: { [key: string]: number[][] } = {
  'Wanda Maximoff': [[3, 7, 1], [5, 2, 8], [6, 4, 9], [1, 8, 3], [7, 2, 5], [4, 6, 1], [9, 3, 2], [8, 5, 4]],
  'Ravena': [[2, 9, 6], [1, 4, 7], [9, 1, 5], [6, 3, 8], [4, 2, 9], [7, 1, 6], [3, 5, 2], [8, 9, 1]],
  'Mulher Gato': [[2, 4, 8], [5, 6, 3], [1, 9, 7], [6, 2, 5], [4, 8, 3], [9, 6, 1], [7, 3, 4], [2, 1, 9]],
  'Viúva Negra': [[5, 8, 6], [3, 9, 2], [1, 6, 4], [8, 7, 5], [4, 9, 3], [6, 5, 2], [9, 8, 1], [2, 7, 4]],
  'Mavis': [[5, 3, 9], [1, 2, 8], [7, 6, 3], [4, 1, 9], [3, 8, 5], [6, 9, 2], [8, 4, 7], [9, 5, 1]],
  'Muzan Kibutsuji': [[2, 3, 6], [1, 5, 8], [7, 9, 4], [3, 1, 6], [5, 4, 2], [9, 7, 3], [6, 8, 1], [2, 5, 9]],
  'Mulher Maravilha': [[4, 3, 7], [8, 6, 5], [1, 9, 2], [7, 5, 3], [3, 4, 9], [6, 1, 8], [2, 8, 4], [5, 9, 6]],
  'Thorn': [[9, 4, 1], [7, 2, 6], [3, 6, 5], [1, 7, 9], [4, 5, 8], [2, 9, 3], [6, 7, 4], [8, 3, 1]],
  'Chel': [[5, 1, 9], [9, 6, 8], [7, 4, 2], [3, 2, 5], [1, 8, 6], [4, 9, 7], [6, 3, 9], [2, 1, 5]],
  'Aladdin': [[8, 7, 3], [5, 6, 4], [9, 1, 2], [7, 8, 5], [3, 9, 6], [4, 2, 1], [6, 5, 9], [1, 3, 7]],
};

@Component({
  selector: 'app-urna',
  standalone: true,
  imports: [CommonModule], // Importa o CommonModule para usar ngIf
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;

  // Variável que contém os números de 1 a 9
  numeros: number[] = Array.from({ length: 9 }, (_, i) => i + 1);
  inputValues: string[] = ['', '', '']; // Armazena os valores dos inputs
C: any;

  ngOnInit() {
    // Inicializa a lista de personagens
    this.characters = [
      { id: 1, name: 'Wanda Maximoff', image: 'https://i.pinimg.com/736x/58/cf/b1/58cfb1d7be835b5d0f3d7e278b6f4525.jpg', profession: 'Portadora do Caos' },
      { id: 2, name: 'Ravena', image: 'https://i.pinimg.com/736x/ee/4c/91/ee4c919d5fdbcdc25279e45e31cbf336.jpg', profession: 'Empata' },
      { id: 3, name: 'Mulher Gato', image: 'https://i.pinimg.com/736x/5a/17/0b/5a170bcdd221007f0714c5559ec517c7.jpg', profession: 'Ladra de Jóias' },
      { id: 4, name: 'Viúva Negra', image: 'https://i.pinimg.com/736x/8b/bd/8a/8bbd8ae8f74f1fc5a631cef268642319.jpg', profession: 'Membro dos Vingadores' },
      { id: 5, name: 'Mavis', image: 'https://i.pinimg.com/736x/b3/df/b4/b3dfb426edde71a20451be981a570f94.jpg', profession: 'Filha do Drácula' },
      { id: 6, name: 'Muzan Kibutsuji', image: 'https://i.pinimg.com/736x/95/f5/35/95f5353ba2f51dae8b9327aa79907d03.jpg', profession: 'Rei dos Demônios' },
      { id: 7, name: 'Mulher Maravilha', image: 'https://i.pinimg.com/736x/c8/02/38/c802382a9a61533f1309da30529d37a6.jpg', profession: 'Deusa da Guerra' },
      { id: 8, name: 'Thorn', image: 'https://i.pinimg.com/736x/bb/bc/87/bbbc87ab0bdb01000f50bdd246920e66.jpg', profession: 'Hex Girl' },
      { id: 9, name: 'Chel', image: 'https://i.pinimg.com/736x/85/b5/a5/85b5a57ca8a7e8fb32241b467831f4db.jpg', profession: 'Habitante de Eldorado' },
      { id: 10, name: 'Aladdin', image: 'https://i.pinimg.com/736x/5d/82/92/5d8292816ca429c035fc185c1244e031.jpg', profession: 'Rei dos Desejos' },
    ];
  }

  adicionarNumero(numero: number) {
    const emptyIndex = this.inputValues.findIndex(value => value === '');
    if (emptyIndex !== -1) {
      this.inputValues[emptyIndex] = numero.toString();
      if (this.inputValues.every(value => value !== '')) {
        this.findCharacter();
      }
    }
  }

  limparNumeros() {
    this.inputValues = ['', '', ''];
    this.selectedCharacter = null;
  }

  corrigirNumeros() {
    this.inputValues = ['', '', ''];
  }

  confirmarNumeros() {
    this.findCharacter();
  }

  findCharacter() {
    const combination = this.inputValues.map(Number);
    for (const [characterName, combinations] of Object.entries(characterCombinations)) {
      if (combinations.some(comb => comb.join('') === combination.join(''))) {
        this.selectedCharacter = this.characters.find(c => c.name === characterName) || null;
        return;
      }
    }
    this.selectedCharacter = null;
  }
} 