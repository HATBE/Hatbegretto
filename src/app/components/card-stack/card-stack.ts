import {Component, Input} from '@angular/core';
import {PlayCard} from '../play-card/play-card';
import {Card} from '../../types/card.type';

@Component({
  selector: 'app-card-stack',
  imports: [PlayCard],
  templateUrl: './card-stack.html',
  styleUrl: './card-stack.css',
})
export class CardStack {
  @Input() cards!: Card[];
}
