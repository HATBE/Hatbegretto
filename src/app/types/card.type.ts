import {CardFrontColor} from './card-front-color.type';
import {CardRearColor} from './card-rear-color.type';

export type Card = {
  number: number;
  rearColor: CardRearColor;
  frontColor: CardFrontColor
}
