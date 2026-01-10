import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Card} from '../../../types/card.type';

@Component({
  selector: 'app-card-front',
  imports: [CommonModule],
  templateUrl: './card-front.html',
  styleUrl: './card-front.css',
})
export class CardFront {
  @Input() card!: Card;

  protected getCardClass(): string {
    return `card card-${this.card.frontColor}`
  }
}
