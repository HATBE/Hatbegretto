import {Injectable} from '@angular/core';
import {CardStack, PlayAreaCardStack} from '../types/playarea-card-stack.type';
import {Card} from '../types/card.type';
import {Player} from '../types/player.type';
import {CardRearColor} from '../types/card-rear-color.type';
import { Point } from '@angular/cdk/drag-drop';

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

    public getPlayers(): Player[] {
      return this.players;
    }

    public getPlayer(color: CardRearColor): Player {
      return this.players.find(player => player.color === color)!;
    }


    public findPlayareaCardStackById(id: string): PlayAreaCardStack | undefined {
      return this.playareaCards.find((i) => i.localId === id);
    }

    public updatePlayareaCardStackPosition(id: string, position: Point): void {
      this.playareaCards = this.playareaCards.map((cardStack) =>
        cardStack.localId === id ? { ...cardStack, x: position.x, y: position.y } : cardStack
      );

      //this.savePlaygroundCards(this.playgroundCards);
    }

    public createPlayAreaCardStack(
      id: string,
      cards: Card[],
      x: number,
      y: number,
    ): PlayAreaCardStack {
      const cardStack = {
        cards,
        localId: crypto.randomUUID(),
        x,
        y,
      };

      this.playareaCards.push(cardStack);

      //this.savePlaygroundCards(this.playgroundCards);

      return cardStack;
    }
}
