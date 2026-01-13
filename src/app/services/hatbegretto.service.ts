import {Injectable} from '@angular/core';
import {CardStack} from '../types/card-stack.type';
import {Card} from '../types/card.type';
import {Player} from '../types/player.type';
import {CardRearColor} from '../types/card-rear-color.type';

const FRONT_COLORS = ['red', 'blue', 'green', 'yellow'] as const;
const REAR_COLORS  = ['pink', 'brown', 'grey', 'lime'] as const;

@Injectable({
    providedIn: 'root',
})
export default class HatbegrettoService {
    private players: Player[] = [];
    private playareaCards: CardStack[] = [];

    private initDeck: Card[] = [];

    public resetGame() {
      this.players = [];
      this.playareaCards = [];

      this.initDeck = this.createInitialDeck();

      this.players = [this.createPlayer('pink'), this.createPlayer('brown'), this.createPlayer('grey'), this.createPlayer('lime')]
    }

    private createPlayer(color: CardRearColor): Player {
      let playersDeck = this.shuffle(this.initDeck.filter(card => card.rearColor === color));

      const row = playersDeck.splice(0, 3);
      const stack = playersDeck.splice(0, 10);
      const hand = playersDeck.splice(0);

      return {
        color,
        row: row,
        stack: stack,
        hand: hand,
      }
    }

    private shuffle(cards: Card[]): Card[] {
      const copy = [...cards];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    private createInitialDeck(): Card[] {
        const deck: Card[] = [];

        for (let i = 0; i < 4; i++) {
          const rearColor = REAR_COLORS[i];

          for(let j = 1; j <= 10; j++) {
            for(let k = 0; k < 4; k++) {
              const frontColor = FRONT_COLORS[k];
              deck.push({number: j, rearColor, frontColor});
            }
          }
        }

        return deck;
    }

    public getRow(): Card[] {
      return this.players.find(player => player.color === 'lime')!.row;
    }

    public getStack(): Card[]  {
      return this.players.find(player => player.color === 'lime')!.stack;
    }

    public getHand(): Card[]  {
      return this.players.find(player => player.color === 'lime')!.hand;
    }

    public getPlayareaCards(): CardStack[]  {
      return this.playareaCards;
    }

}
