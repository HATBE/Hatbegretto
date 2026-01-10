import { Component } from '@angular/core';
import {PlayCard} from "../play-card/play-card";

@Component({
  selector: 'app-card-row',
    imports: [
        PlayCard
    ],
  templateUrl: './card-row.html',
  styleUrl: './card-row.css',
})
export class CardRow {

}
