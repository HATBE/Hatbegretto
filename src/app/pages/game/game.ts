import { Component } from '@angular/core';
import {Hand} from '../../components/hand/hand';
import {Playarea} from '../../components/playarea/playarea';
import {Header} from '../../components/header/header';

@Component({
  selector: 'app-game',
  imports: [Hand, Playarea, Header],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
}
