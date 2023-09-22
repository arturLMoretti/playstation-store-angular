import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games = [
    {
      name: 'Super Mario Bros',
      imageLink: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
      label: 'Nintendo',
      price: 'R$ 299,99',
      console: 'Nintendo',
    }
  ]

}
