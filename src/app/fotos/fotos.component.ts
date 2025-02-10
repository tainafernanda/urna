import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

interface Character {
  id: number;
  name: string;
  image: string; // URL da imagem do personagem
  profession: string; // Profissão do personagem
}

const characters: Character[] = [
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

@Component({
  selector: 'app-fotos',
  standalone: true, // Adicionando standalone: true
  imports: [CommonModule], // Adicionando o CommonModule aqui
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  characters: Character[] = characters;
  selectedCharacter: Character | null = null;

  ngOnInit() {
    // Exemplo de seleção de um personagem
    this.selectedCharacter = this.characters[0]; // Seleciona o primeiro personagem como exemplo
  }
}