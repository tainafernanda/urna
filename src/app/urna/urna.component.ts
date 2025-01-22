import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  image: string; // URL da imagem do personagem
  profession: string; // Profissão do personagem
  votingCode: string; // Código de votação do personagem
}

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

  ngOnInit() {
    // Inicializa a lista de personagens
    this.characters = [
      { id: 1, name: 'Wanda Maximoff', image: 'https://i.pinimg.com/736x/58/cf/b1/58cfb1d7be835b5d0f3d7e278b6f4525.jpg', profession: 'Portadora do Caos', votingCode: '001' },
      { id: 2, name: 'Ravena', image: 'https://i.pinimg.com/736x/ee/4c/91/ee4c919d5fdbcdc25279e45e31cbf336.jpg', profession: 'Empata', votingCode: '002' },
      { id: 3, name: 'Mulher Gato', image: 'https://i.pinimg.com/736x/60/40/35/604035d2835156cfdd0d4a048b7eac96.jpg', profession: 'Ladra de Jóias', votingCode: '003' },
      { id: 4, name: 'Viúva Negra', image: 'https://i.pinimg.com/736x/8b/bd/8a/8bbd8ae8f74f1fc5a631cef268642319.jpg', profession: 'Membro dos Vingadores', votingCode: '004' },
      { id: 5, name: 'Mavis', image: 'https://i.pinimg.com/736x/b3/df/b4/b3dfb426edde71a20451be981a570f94.jpg', profession: 'Filha do Drácula', votingCode: '005' },
      { id: 6, name: 'Muzan Kibutsuji', image: 'https://i.pinimg.com/736x/95/f5/35/95f5353ba2f51dae8b9327aa79907d03.jpg', profession: 'Rei dos Demônios', votingCode: '006' },
      // Adicione mais personagens se necessário
    ];
  }

  onSelectCharacter(id: number) {
    // Seleciona o personagem com base no ID fornecido
    this.selectedCharacter = this.characters.find(character => character.id === id) || null;
  }
}