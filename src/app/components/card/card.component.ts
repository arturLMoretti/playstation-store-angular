import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() game = {
    name: '',
    imageLink: '0',
    label: '',
    price: 'R$ 299,99',
    console: 'Nintendo',
  }
}
