import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrnaComponent } from './urna/urna.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UrnaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'urna';
}
