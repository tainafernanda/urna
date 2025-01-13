import { Component } from '@angular/core';

interface Character {
  id: number;
  name: string;
  image: string; // Caminho da imagem do personagem
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Urna Eletrônica';
  characters: Character[] = [
    { id: 1, name: 'Personagem 1', image: 'assets/images/personagem1.png' },
    { id: 2, name: 'Personagem 2', image: 'assets/images/personagem2.png' },
    { id: 3, name: 'Personagem 3', image: 'assets/images/personagem3.png' },
    { id: 4, name: 'Personagem 4', image: 'assets/images/personagem4.png' },
    { id: 5, name: 'Personagem 5', image: 'assets/images/personagem5.png' },
    { id: 6, name: 'Personagem 6', image: 'assets/images/personagem6.png' }
  ];
  
  selectedCharacter: Character | null = null;

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }

  getBestCharacter(): Character | null {
    return this.selectedCharacter; // Retorna o personagem selecionado como o "melhor"
  }
}