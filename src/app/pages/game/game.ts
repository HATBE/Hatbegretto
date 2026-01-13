import {Component, OnInit} from '@angular/core';
import {Header} from '../../components/header/header';
import {CardStackComponent} from '../../components/card-stack/card-stack.component';
import {CardRow} from '../../components/card-row/card-row';
import {Playarea} from '../../components/playarea/playarea';
import {Card} from '../../types/card.type';
import HatbegrettoService from '../../services/hatbegretto.service';
import {CardStack} from '../../types/card-stack.type';

@Component({
  selector: 'app-game',
  imports: [CardStackComponent, CardRow, Playarea, Header],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game implements OnInit {
  protected rowCards: Card[] = [];
  protected stackCards: Card[] = [];
  protected handCards: Card[] = [];
  protected playareaCards: CardStack[] = [];

  public constructor(private hatbegrettoService: HatbegrettoService) {}

  ngOnInit() {
    this.hatbegrettoService.resetGame()

    this.rowCards = this.hatbegrettoService.getRow();
    this.stackCards = this.hatbegrettoService.getStack();
    this.handCards = this.hatbegrettoService.getHand();
    this.playareaCards = this.hatbegrettoService.getPlayareaCards();
  }
}
