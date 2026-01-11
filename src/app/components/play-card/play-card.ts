import {Component, Input} from '@angular/core';

import {Card} from '../../types/card.type';
import {CardFront} from './card-front/card-front';
import {CardBack} from './card-back/card-back';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-play-card',
  imports: [CardFront, CardBack, DragDropModule],
  templateUrl: './play-card.html',
  styleUrl: './play-card.css',
})
export class PlayCard {
  @Input() isFaceUp= true;
  @Input() card!: Card;
}
