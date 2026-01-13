import {Component, OnInit} from '@angular/core';
import {Header} from '../../components/header/header';
import {Playarea} from '../../components/playarea/playarea';
import {Card} from '../../types/card.type';
import HatbegrettoService from '../../services/hatbegretto.service';
import {CardStack} from '../../types/playarea-card-stack.type';
import {Menu} from '../../components/menu/menu';
import {Player} from '../../types/player.type';

@Component({
  selector: 'app-game',
  imports: [Menu, Playarea, Header],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game implements OnInit {

  protected player: Player | null = null;

  public constructor(private hatbegrettoService: HatbegrettoService) {}

  ngOnInit() {
    this.hatbegrettoService.resetGame()

    this.player = this.hatbegrettoService.getPlayer('lime')
    //this.playareaCards = this.hatbegrettoService.getPlayareaCards();
  }
}
