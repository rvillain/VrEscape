import { GameManager } from './../game-manager';
import { Phase } from './phase';

export class BizPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -9';
    }

    public start(): void {
        var sceneEl = document.querySelector('a-scene');

        let linkHtml = '<a-link href="moon.html" title="Aller sur la lune" scale="0.8 0.8 0.8" image="#moon" position="0 1.2 0"></a-link>';
        var entity = document.createElement('a-entity');
        entity.setAttribute('position', '-6 0 -10');
        entity.innerHTML = linkHtml;
        sceneEl.appendChild(entity);
    }
    public end(): void {
    }

}