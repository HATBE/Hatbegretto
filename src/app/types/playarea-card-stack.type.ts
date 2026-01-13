import {Card} from './card.type';

export type PlayAreaCardStack = {
  localId: string;
  cards: Card[];
  x: number;
  y: number;
};
