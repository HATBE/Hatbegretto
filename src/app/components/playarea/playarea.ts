import {Component, Input} from '@angular/core';
import {CardStack} from '../card-stack/card-stack';

@Component({
  selector: 'app-playarea',
  imports: [],
  templateUrl: './playarea.html',
  styleUrl: './playarea.css',
})
export class Playarea {
  @Input() cardStacks!: CardStack[];
}
