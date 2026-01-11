import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PlayCard} from "../play-card/play-card";
import {DragDropModule} from '@angular/cdk/drag-drop';
import ZIndexOnCardDragDirective from '../../directives/ZIndexOnCardDrag.directive';
import {Card} from '../../types/card.type';

@Component({
  selector: 'app-card-row',
    imports: [PlayCard, DragDropModule, ZIndexOnCardDragDirective],
  templateUrl: './card-row.html',
  styleUrl: './card-row.css',
})
export class CardRow implements OnInit, OnChanges {
  @Input() cards: Card[] = [];

  ngOnInit() {

  }

  ngOnChanges() {
    if(this.cards.length > 3) {
      alert('Too many cards in the row!');
    }
  }
}
