import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Card} from '../../types/card.type';

@Component({
  selector: 'app-play-card',
  imports: [CommonModule],
  templateUrl: './play-card.html',
  styleUrl: './play-card.css',
})
export class PlayCard implements OnInit {
  @Input() card!: Card;

  public ngOnInit(): void {

  }

  protected getCardClass(): string {
    return `card card-${this.card.frontColor}`
  }
}
