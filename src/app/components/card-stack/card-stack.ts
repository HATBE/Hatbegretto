import {Component, Input} from '@angular/core';
import {PlayCard} from '../play-card/play-card';
import {Card} from '../../types/card.type';
import {DragDropModule} from '@angular/cdk/drag-drop';
import ZIndexOnCardDragDirective from '../../directives/ZIndexOnCardDrag.directive';

@Component({
  selector: 'app-card-stack',
  imports: [PlayCard, DragDropModule, ZIndexOnCardDragDirective],
  templateUrl: './card-stack.html',
  styleUrl: './card-stack.css',
})
export class CardStack {
  @Input() cards!: Card[];
  @Input() isFaceUp= true;
  @Input() showTopCard= false;
}
