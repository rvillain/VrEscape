import { GameManager } from '../game-manager';

export abstract class Phase {
    constructor(game: GameManager) {
        this.game = game;
    }

    public sceneEl: HTMLElement;

    public lightPosition: string;

    public scoreboardPosition: string;
    public scoreboardRotation: string;

    public game: GameManager;

    public abstract start(): void;

    public abstract end(): void;

    public abstract buttonClick(action: string): void;
}