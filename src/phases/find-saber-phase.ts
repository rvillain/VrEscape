import { GameManager } from '../game-manager';
import { Phase } from './phase';

export class FindSaberPhase extends Phase {


    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -3.32804';
        this.scoreboardPosition = '-7.91022 0.8 -1.28953';
        this.scoreboardRotation = '0 180.000 0';
    }

    leftSaberFound = false;
    rightSaberFound = false;

    public start(): void {
        this.sceneEl = document.querySelector('a-scene');
        this.addSabers();
    }
    public end(): void {
        this.game.phaseEnd();
    }


    findSaber(color: string) {
        var elem = document.querySelector('#sabre-' + color);
        var parent = elem.parentNode;
        switch (color) {
            case 'bleu':
                this.rightSaberFound = true;
                break;
            case 'rouge':
                this.leftSaberFound = true;
                break;
        }

        parent.removeChild(elem);

        this.addSaber(color, true);

        if (this.leftSaberFound && this.rightSaberFound) {
            this.end();
        }

    }

    public addSabers(): void {
        this.addSaber('bleu');
        this.addSaber('rouge');
    }

    public addSaber(color: string, inHand: boolean = false): void {
        let hexaColor: string;
        let position: string;
        let rotation: string;
        let target: any;
        switch (color) {
            case 'bleu':
                hexaColor = '#2233AA';
                position = '-6.60959 0.11206 -2.4363';
                rotation = '-8 1 -5';
                rotation = '0 5 -5';
                target = document.querySelector('#rhand');
                break;
            case 'rouge':
                hexaColor = '#AA2233';
                position = '-10.30252 0.11086 -5';
                rotation = '2 0 10';
                target = document.querySelector('#lhand');
                break;
        }
        const htmlSaber = ` <a-entity id="sabre-${color}" ${inHand ? '' : 'grab'} bs-saber="color: ${color}" position="0 0 0" rotation="0 0 0">
                                <a-cylinder color="#DEDEDE" geometry="radius: 0.015; height: 0.22"></a-cylinder>
                                <a-cylinder position="0 0.44 0" opacity="0.5" color="${hexaColor}" geometry="radius: 0.015; height: 0.66"></a-cylinder>
                            </a-entity>`;

        var entity = document.createElement('a-entity');
        entity.innerHTML = htmlSaber;
        if (inHand) {
            target.appendChild(entity);
        }
        else {
            entity.setAttribute('id', 'sabre-init');
            entity.setAttribute('position', position);
            entity.setAttribute('rotation', rotation);

            this.sceneEl.appendChild(entity);
        }
    }

    public buttonClick(action: string): void {

    }

}