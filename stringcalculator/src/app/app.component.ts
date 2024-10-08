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
    let delimiter = [',']
    let numberString = input;
    if(input.startsWith('//[')){
      delimiter = input.match(/\[(.*?)\]/g);
      delimiter = delimiter.map(d => d.replace(/[-\/\\^$*+?.(@!)|[\]{}]/g, '\\$&'));
      numberString = input.slice(input.indexOf('\n'));
    } else if(input.startsWith('//')){
      delimiter = input.match(/\/\/(.+)\n/);
      numberString = input.slice(2)
    }
    delimiter = delimiter.map(d => d.slice(1,-1).replace(/[-\/\\^$*+?.(@!)|[\]{}]/g, '\\$&'));
    let regex = new RegExp(`[,\n${delimiter}]`)
    let numbers = numberString.split(regex);    
    let sum = 0;
    let negativeNumbers = [];
    try {
      numbers.forEach(element => {
        if(Number(element) < 0) {
          negativeNumbers.push(element);
        }
        sum += Number(element) > 1000 ? 0 : Number(element);
      });
      if(negativeNumbers?.length) {
        throw Error('negatives not allowed: '+ negativeNumbers.toString());
      }
    } catch (error) {
      console.error(error)
      return error.message
    }
    return sum ;
  }
}
