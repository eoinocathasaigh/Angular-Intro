import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  //Declaring Variables
  proof:string = "B2 Works!";
}
