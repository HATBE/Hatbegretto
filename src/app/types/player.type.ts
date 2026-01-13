import {CardRearColor} from './card-rear-color.type';
import {Card} from './card.type';

export type Player = {
  color: CardRearColor;
  row: Card[];
  stack: Card[];
  hand: Card[];
};
