import { GameManager } from '../game-manager';

export abstract class Phase {
    constructor(game: GameManager) {
        this.game = game;
    }

    public lightPosition: string;

    public game: GameManager;

    public abstract start(): void;

    public abstract end(): void;
}