import { GameManager } from './../game-manager';
import { Phase } from './phase';

export class BizPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -9';
    }

    public start(): void {
        var sceneEl = document.querySelector('a-scene');

        let linkHtml = '<a-entity link="href: moon.html; title: Aller sur la lune; image: #moon"></a-entity>';

        var entity = document.createElement('a-entity');
        entity.setAttribute('position', '-6 0 -10');
        entity.innerHTML = linkHtml;
        sceneEl.appendChild(entity);
    }
    public end(): void {
    }

}