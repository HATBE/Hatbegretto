import { Component } from '@angular/core';
import {PlayCard} from "../play-card/play-card";
import {DragDropModule} from '@angular/cdk/drag-drop';
import ZIndexOnCardDragDirective from '../../directives/ZIndexOnCardDrag.directive';

@Component({
  selector: 'app-card-row',
    imports: [PlayCard, DragDropModule, ZIndexOnCardDragDirective],
  templateUrl: './card-row.html',
  styleUrl: './card-row.css',
})
export class CardRow {

}
