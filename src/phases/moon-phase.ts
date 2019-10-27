import { GameManager } from '../game-manager';
import { Phase } from './phase';

export class MooonPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -9';
        this.scoreboardPosition = '-7 0.8 -8';
        this.scoreboardRotation = '0 -9 0';
    }

    public start(): void {
        this.sceneEl = document.querySelector('a-scene');

        let linkHtml = '<a-link href="moon.html" title="Aller sur la lune" scale="0.8 0.8 0.8" image="#moon" position="0 1.2 0"></a-link>';
        var entity = document.createElement('a-entity');
        entity.setAttribute('position', '-6 0 -10');
        entity.innerHTML = linkHtml;
        this.sceneEl.appendChild(entity);
    }
    public end(): void {
    }

}