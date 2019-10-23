import { GameManager } from './../game-manager';
import { Phase } from './phase';

export class BizPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -9';
    }

    public start(): void {
        throw new Error('Method not implemented.');
    }
    public end(): void {
        throw new Error('Method not implemented.');
    }

}