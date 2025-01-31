import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  image: string; // URL da imagem do personagem
  profession: string; // Profissão do personagem
  votingCode: string; // Código de votação do personagem
}

// Função para gerar um código de votação aleatório de três dígitos
const gerarCodigo = () => {
  return (
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString()
  );
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
  inputValues: { [key: number]: string } = {}; // Armazena os valores dos inputs

  // Variável para armazenar o personagem encontrado
  foundCharacter: string | null = null;

  // Armazena os votos para cada personagem
  votes: { [key: string]: number } = {};

  ngOnInit() {
    // Inicializa a lista de personagens com códigos de votação aleatórios
    this.characters = [
      { id: 1, name: 'Wanda Maximoff', image: 'https://i.pinimg.com/736x/58/cf/b1/58cfb1d7be835b5d0f3d7e278b6f4525.jpg', profession: 'Portadora do Caos', votingCode: gerarCodigo() },
      { id: 2, name: 'Ravena', image: 'https://i.pinimg.com/736x/ee/4c/91/ee4c919d5fdbcdc25279e45e31cbf336.jpg', profession: 'Empata', votingCode: gerarCodigo() },
      { id: 3, name: 'Mulher Gato', image: 'https://i.pinimg.com/736x/5a/17/0b/5a170bcdd221007f0714c5559ec517c7.jpg', profession: 'Ladra de Jóias', votingCode: gerarCodigo() },
      { id: 4, name: 'Viúva Negra', image: 'https://i.pinimg.com/736x/8b/bd/8a/8bbd8ae8f74f1fc5a631cef268642319.jpg', profession: 'Membro dos Vingadores', votingCode: gerarCodigo() },
      { id: 5, name: 'Mavis', image: 'https://i.pinimg.com/736x/b3/df/b4/b3dfb426edde71a20451be981a570f94.jpg', profession: 'Filha do Drácula', votingCode: gerarCodigo() },
      { id: 6, name: 'Muzan Kibutsuji', image: 'https://i.pinimg.com/736x/95/f5/35/95f5353ba2f51dae8b9327aa79907d03.jpg', profession: 'Rei dos Demônios', votingCode: gerarCodigo() },
      { id: 7, name: 'Mulher Maravilha', image: 'https://i.pinimg.com/736x/c8/02/38/c802382a9a61533f1309da30529d37a6.jpg', profession: 'Princesa', votingCode: gerarCodigo() },
      { id: 8, name: 'Thorn', image: 'https://i.pinimg.com/736x/bb/bc/87/bbbc87ab0bdb01000f50bdd246920e66.jpg', profession: 'Hex Girl', votingCode: gerarCodigo() },
      { id: 9, name: 'Chel', image: 'https://i.pinimg.com/736x/85/b5/a5/85b5a57ca8a7e8fb32241b467831f4db.jpg', profession: 'Habitante de Eldorado', votingCode: gerarCodigo() },
      { id: 10, name: 'Aladdin', image: 'https://i.pinimg.com/736x/5d/82/92/5d8292816ca429c035fc185c1244e031.jpg', profession: 'Rei dos Desejos', votingCode: '19' },
    ];

    // Inicializa com o primeiro personagem
    this.selectedCharacter = this.characters[0];

    // Inicializa os votos para cada personagem
    this.characters.forEach(character => {
      this.votes[character.name] = 0;
    });
  }

  selecionarPersonagem(id: number) {
    this.selectedCharacter = this.characters.find(character => character.id === id) || null;
  }

  onSelectCharacter(character: Character) {
    this.selectedCharacter = character;
  }

  // Método para limpar a seleção do personagem
  clearSelection() {
    this.selectedCharacter = null;
  }

  findCharacterByCombination(combination: number[]): string | null {
    return this.encontrarPersonagem(combination);
  }

  encontrarPersonagem(combination: number[]): string | null {
    const code = combination.join('');
    const character = this.characters.find(c => c.votingCode === code);
    return character ? character.name : null;
  }

  findCharacter() {
    const combination = Object.values(this.inputValues).map(Number);
    this.foundCharacter = this.encontrarPersonagem(combination);
    if (this.foundCharacter) {
      this.votes[this.foundCharacter] += 1; // Incrementa o voto para o personagem encontrado
    }
  }

  getWinner(): Character | null {
    const winnerName = Object.entries(this.votes).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    return this.characters.find(character => character.name === winnerName) || null;
  }
}