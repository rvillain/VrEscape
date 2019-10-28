import { GameManager } from '../game-manager';
import { Phase } from './phase';
import { Constants } from '../constants';

export class MooonPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '1.8115 1.93844 5.87288';
        this.scoreboardPosition = '0 0 0';
        this.scoreboardRotation = '0 0 0';
    }

    public start(): void {
        this.sceneEl = document.querySelector('a-scene');

        if (window.location.href.indexOf('moon.html') > -1) {
            // On est sur la lune
            var entity = document.createElement('a-entity');
            entity.setAttribute('gltf-model', '#lunar-module');
            entity.setAttribute('position', '10 50 -5.169');
            entity.setAttribute('scale', '0.8 0.8 0.8');
            entity.setAttribute('id', 'module');
            entity.setAttribute('animation', `property: position; to: 10 0 -5.169; loop: false; dur: 15000; delay: 0`);
            entity.innerHTML = `<a-light id="light" light="type: spot; color: #ffffff; intensity: 0.5; decay: 7; distance: 50; castShadow: true" position="-0.04471 3.00836 2.86347" rotation="-90 0 0"></a-light>
            <a-light id="light-2" light="type: spot; color: #ffffff; intensity: 0.5; decay: 7; distance: 50; castShadow: true" position="0 2.26433 -2.49708" rotation="-90 0 0"></a-light>`;
            this.sceneEl.appendChild(entity);
        }
        else {
            // On est encore sur terre
            let linkHtml = '<a-link href="moon.html" title="Aller sur la lune" scale="0.8 0.8 0.8" image="#moon" position="0.91108 1.2 0.57651" rotation="0 -90 0"></a-link>';
            var entity = document.createElement('a-entity');
            entity.setAttribute('position', '-6 0 -10');
            entity.setAttribute('roation', '0 -90 0');
            entity.innerHTML = linkHtml;
            this.sceneEl.appendChild(entity);

            localStorage.setItem(Constants.phaseKey, this.game.phases.indexOf(this).toString());
        }
    }
    public end(): void {
    }

    public buttonClick(action: string): void {

    }

}