import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',//etiqueta html
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Adrian Espinal');
}
