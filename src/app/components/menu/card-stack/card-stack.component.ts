import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CdkDrag, DragDropModule} from '@angular/cdk/drag-drop';
import {Card} from '../../../types/card.type';
import ZIndexOnCardDragDirective from '../../../directives/ZIndexOnCardDrag.directive';
import {PlayCard} from '../../play-card/play-card';

@Component({
  selector: 'app-card-stack',
  imports: [PlayCard, DragDropModule, CdkDrag, ZIndexOnCardDragDirective],
  templateUrl: './card-stack.component.html',
  styleUrl: './card-stack.component.css',
})
export class CardStackComponent implements OnChanges {
  @Input() inputCards!: Card[];
  @Input() isFaceUp= true;
  @Input() showTopCard= false;
  @Input() topCardDraggable = true;

  protected cards: Card[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.cards = [...this.inputCards].reverse(); // Reverse the order of the cards, so that the first card is on top
  }
}
