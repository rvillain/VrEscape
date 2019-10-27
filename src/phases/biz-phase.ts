import { GameManager } from './../game-manager';
import { Phase } from './phase';

export class BizPhase extends Phase {

    private boardEl: HTMLElement;

    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -9';
        this.scoreboardPosition = '-4.43 1.45 -10';
        this.scoreboardRotation = '0 -90 0';
    }

    public start(): void {
        this.createBoard();
    }
    public end(): void {
    }

    public createBoard() {
        var sceneEl = document.querySelector('a-scene');
        this.boardEl = document.createElement('a-entity');
        this.boardEl.setAttribute('id', 'biz-board');
        this.boardEl.setAttribute('position', '-4.41392 1.43847 -9.71405');
        this.boardEl.setAttribute('rotation', '0 -90 0');

        let html = `<a-box color="#882233" width="1.5" height="3" depth="0.02" material="color: #a24004" geometry="height: 1"></a-box>`;

        this.boardEl.innerHTML = html;

        sceneEl.appendChild(this.boardEl);
    }
}