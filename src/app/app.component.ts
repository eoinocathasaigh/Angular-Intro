import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'my-first-app';
  //Data binding
  myName:string = 'Eoin';
  myAge:number = 19;
}
