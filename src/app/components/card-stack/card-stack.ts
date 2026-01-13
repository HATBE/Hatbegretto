import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PlayCard} from '../play-card/play-card';
import {Card} from '../../types/card.type';
import {CdkDrag, DragDropModule} from '@angular/cdk/drag-drop';
import ZIndexOnCardDragDirective from '../../directives/ZIndexOnCardDrag.directive';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-card-stack',
  imports: [PlayCard, DragDropModule, CdkDrag, ZIndexOnCardDragDirective, NgClass],
  templateUrl: './card-stack.html',
  styleUrl: './card-stack.css',
})
export class CardStack implements OnChanges {
  @Input() inputCards!: Card[];
  @Input() isFaceUp= true;
  @Input() showTopCard= false;
  @Input() topCardDraggable = true;

  protected cards: Card[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.cards = [...this.inputCards].reverse(); // Reverse the order of the cards, so that the first card is on top
  }
}
