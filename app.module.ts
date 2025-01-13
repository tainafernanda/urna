import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UrnaComponent } from './urna/urna.component'; // Importa o componente Urna

@NgModule({
  declarations: [
    AppComponent,
    UrnaComponent // Declara o componente Urna
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }