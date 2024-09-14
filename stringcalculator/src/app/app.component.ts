import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stringcalculator';


  // Create a simple String calculator with a method signature:

  add(input) {
    if(input === ''){
      return 0;
    }
    let numbers = input.split(/[,\n]/);
    let sum = 0;
    numbers.forEach(element => {
      sum += Number(element);
    });
    return sum ;
  }
}
