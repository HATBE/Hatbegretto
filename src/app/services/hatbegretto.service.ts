import {Injectable} from '@angular/core';
import {CardStack} from '../types/card-stack.type';
import {Card} from '../types/card.type';

const FRONT_COLORS = ['red', 'blue', 'green', 'yellow'] as const;
const REAR_COLORS  = ['pink', 'brown', 'grey', 'lime'] as const;

@Injectable({
    providedIn: 'root',
})
export default class HatbegrettoService {
    private deck: Card[] = [];

    private playareaCards: CardStack[] = [];
    private rowCards: Card[] = [];
    private stackCards: Card[] = [];
    private handCards: Card[] = [];

    public resetGame() {

        this.createGameCards();
    }

    shuffle<T>(array: T[]): T[] {
        const result = [...array];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    private createGameCards() {
        this.resetCards();
        const deck: Card[] = [];

        for (const frontColor of FRONT_COLORS) {
            for (let number = 1; number <= 10; number++) {
                for (let i = 0; i < 4; i++) {
                    deck.push({
                        number,
                        frontColor,
                        rearColor: REAR_COLORS[i % REAR_COLORS.length],
                    });
                }
            }
        }

        console.log(deck);

        this.deck = deck;
    }

    private resetCards() {
        this.deck = [];
        this.playareaCards = [];
        this.rowCards = [];
        this.stackCards = [];
        this.handCards = [];
    }
}