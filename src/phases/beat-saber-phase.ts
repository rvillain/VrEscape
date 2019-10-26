import { GameManager } from './../game-manager';
import { Phase } from './phase';

export class BeatSaberPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -3.32804';
    }

    public leftInitPosition = [-8.2, 1.5, 0];
    public rightInitPosition = [-8.8, 1.5, 0];

    public hitCount = 0;

    public cubes = [
        { color: 'blue', isRight: true, isUp: true, delay: 0 },
        { color: 'red', isRight: false, isUp: true, delay: 200 },
        { color: 'blue', isRight: true, isUp: false, delay: 700 },
        { color: 'red', isRight: false, isUp: true, delay: 900 }
    ];

    public start(): void {
        this.addCubes();
        this.hitCount = 0;
        setTimeout(() => {
            // en cas d'echec on relance les cubes
            if (this.hitCount !== this.cubes.length) {
                this.start();
            }
        }, 12000);
    }
    public end(): void {
        var elem = document.querySelector('#sabre-bleu');
        elem.parentNode.removeChild(elem);

        elem = document.querySelector('#sabre-rouge');
        elem.parentNode.removeChild(elem);

        this.game.phaseEnd();
    }

    public hit(): void {
        this.hitCount++;
        if (this.hitCount === this.cubes.length) {
            this.end();
        }
    }

    public addCubes(): void {
        var sceneEl = document.querySelector('a-scene');
        this.cubes.forEach(cube => {
            var xPos = cube.isRight ? this.rightInitPosition[0] : this.leftInitPosition[0];
            var yPos = cube.isUp ? this.leftInitPosition[1] : this.leftInitPosition[1] - 0.5;
            var zPos = this.leftInitPosition[2];
            var cubeEl = document.createElement('a-box');
            cubeEl.setAttribute('color', cube.color);
            cubeEl.setAttribute('position', `${xPos} ${yPos} ${zPos}`);
            cubeEl.setAttribute('opacity', `0.8`);
            cubeEl.setAttribute('bs-cube', 'color: ' + (cube.color === 'blue' ? 'bleu' : 'rouge') + ';');
            cubeEl.setAttribute('geometry', `width: 0.2; height: 0.2; depth: 0.2;`);
            cubeEl.setAttribute('animation', `property: position; to:${xPos} ${yPos} ${zPos - 5}; loop: false; dur: 10000; delay: ${cube.delay}`);
            sceneEl.appendChild(cubeEl);
        });
    }

}