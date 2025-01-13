import { Component } from '@angular/core';

@Component({
  selector: 'app-urna',
  template: `
    <div class="urna-container">
      <h1>Urna de Votação</h1>
      <div *ngFor="let personagem of personagens" class="personagem">
        <button (click)="votar(personagem)">Votar em {{ personagem }}</button>
      </div>
      <div class="resultado">
        <h2>Resultados da Votação</h2>
        <div *ngFor="let p of getPersonagensVotados()">
          {{ p }}: {{ votos[p] || 0 }} voto(s)
        </div>
      </div>
    </div>
  `,
  styles: [`
    .urna-container {
      text-align: center;
      margin: 20px;
    }
    .personagem {
      margin: 10px 0;
    }
    .resultado {
      margin-top: 20px;
      border-top: 1px solid #ccc;
      padding-top: 10px;
    }
  `]
})
export class UrnaComponent {
  personagens: string[] = ['Personagem A', 'Personagem B', 'Personagem C'];
  votos: { [key: string]: number } = {};

  votar(personagem: string) {
    if (!this.votos[personagem]) {
      this.votos[personagem] = 0;
    }
    this.votos[personagem]++;
    this.animarVoto();
  }

  animarVoto() {
    // Lógica para animação (pode ser implementada conforme necessário)
    console.log('Animação de voto acionada!');
  }

  getPersonagensVotados() {
    return Object.keys(this.votos);
  }
}
