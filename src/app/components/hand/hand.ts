import { Component } from '@angular/core';
import {PlayCard} from '../play-card/play-card';
import {Card} from '../../types/card.type';

@Component({
  selector: 'app-hand',
  imports: [PlayCard],
  templateUrl: './hand.html',
  styleUrl: './hand.css',
})
export class Hand {

}
