import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../types/player.type';
import {CardRow} from './card-row/card-row';
import {CardStackComponent} from './card-stack/card-stack.component';
import {CardStack} from '../../types/playarea-card-stack.type';
import {Card} from '../../types/card.type';

@Component({
  selector: 'app-menu',
  imports: [CardRow, CardStackComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit{
  @Input() player!: Player;

  protected rowCards: Card[] = [];
  protected stackCards: Card[] = [];
  protected handCards: Card[] = [];

  ngOnInit() {
    this.rowCards = this.player.row;
    this.stackCards = this.player.stack;
    this.handCards = this.player.hand;
  }
}
