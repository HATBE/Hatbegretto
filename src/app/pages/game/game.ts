import { Component } from '@angular/core';
import {Hand} from '../../components/hand/hand';
import {Header} from '../../components/header/header';
import {CardStack} from '../../components/card-stack/card-stack';
import {CardRow} from '../../components/card-row/card-row';
import {Playarea} from '../../components/playarea/playarea';

@Component({
  selector: 'app-game',
  imports: [Hand, CardStack, CardRow, Playarea, Header],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
}
