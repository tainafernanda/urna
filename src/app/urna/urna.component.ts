import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  image: string; // URL da imagem do personagem
  profession: string; // Profissão do personagem
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
  characterId: number | null = null; // ID do personagem digitado pelo usuário

  ngOnInit() {
    // Inicializa a lista de personagens
    this.characters = [
      { id: 1, name: 'Wanda Maximoff', image: 'url_da_foto_1.jpg', profession: 'Portadora do Caos' },
      { id: 2, name: 'Ravena', image: 'url_da_foto_2.jpg', profession: 'Empata' },
      { id: 3, name: 'Mulher Gato', image: 'url_da_foto_3.jpg', profession: 'Ladra de Jóias' },
      { id: 4, name: 'Viúva Negra', image: 'url_da_foto_4.jpg', profession: 'Membro dos Vingadores' },
      { id: 5, name: 'Mavis', image: 'url_da_foto_5.jpg', profession: 'Filha do Drácula' },
      { id: 6, name: 'Muzan Kibutsuji', image: 'url_da_foto_6.jpg', profession: 'Rei dos Demônios' },
      // Adicione mais personagens se necessário
    ];
  }

  onSelectCharacter() {
    if (this.characterId !== null) {
      // Converte o ID para um número inteiro
      const id = Number(this.characterId);
      this.selectedCharacter = this.characters.find(character => character.id === id) || null;
    }
  }
}