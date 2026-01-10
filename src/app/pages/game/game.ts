import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {CardStack} from '../../components/card-stack/card-stack';
import {CardRow} from '../../components/card-row/card-row';
import {Playarea} from '../../components/playarea/playarea';
import {Card} from '../../types/card.type';

@Component({
  selector: 'app-game',
  imports: [CardStack, CardRow, Playarea, Header],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  protected stackCards: Card[] = [
    {number: 4, rearColor: 'brown', frontColor: 'yellow'},
    {number: 2, rearColor: 'brown', frontColor: 'blue'},
    {number: 7, rearColor: 'brown', frontColor: 'yellow'},
    {number: 3, rearColor: 'brown', frontColor: 'red'},
    {number: 1, rearColor: 'brown', frontColor: 'green'},
    {number: 6, rearColor: 'brown', frontColor: 'yellow'},
    {number: 4, rearColor: 'brown', frontColor: 'red'},
    {number: 7, rearColor: 'brown', frontColor: 'green'},
    {number: 8, rearColor: 'brown', frontColor: 'red'},
    {number: 9, rearColor: 'brown', frontColor: 'yellow'},
  ];
}
