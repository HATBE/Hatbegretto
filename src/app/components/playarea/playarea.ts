import {Component, Input} from '@angular/core';
import {CardStackComponent} from '../card-stack/card-stack.component';

@Component({
  selector: 'app-playarea',
  imports: [],
  templateUrl: './playarea.html',
  styleUrl: './playarea.css',
})
export class Playarea {
  @Input() cardStacks!: CardStackComponent[];
}
