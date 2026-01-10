import {Component, Input} from '@angular/core';
import {Card} from '../../../types/card.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card-back',
  imports: [CommonModule],
  templateUrl: './card-back.html',
  styleUrl: './card-back.css',
})
export class CardBack {
  @Input() card!: Card;

  protected getCardClass(): string {
    return `card card-${this.card.rearColor}`
  }
}
