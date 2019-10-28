import { GameManager } from './../game-manager';
import { Phase } from './phase';
import { echaillonTrack, BsNote } from '../models/bsTrack';

export class BeatSaberPhase extends Phase {
    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -3.32804';
        this.scoreboardPosition = '-7.91022 0.8 -1.28953';
        this.scoreboardRotation = '0 180.000 0';
    }

    public cubesPosition = [-8.2, 1.5, 0];

    // Durée de la chanson en secondes
    public duration = 15;
    public songStartOffset = 10;

    public hitCount = 0;

    public track = echaillonTrack;
    public soundEl: any;


    public notes: BsNote[];

    public start(): void {
        this.sceneEl = document.querySelector('a-scene');
        this.addCubes();
        this.addSound();
        this.game.stopMusic();
        this.soundEl.components.sound.playSound();
        this.hitCount = 0;
        setTimeout(() => {
            this.soundEl.components.sound.stopSound();
            // en cas d'echec on relance les cubes
            if (this.hitCount !== this.notes.length) {
                setTimeout(() => {
                    this.start();
                }, 2000);
            }
        }, this.duration * 1000);
    }
    public end(): void {
        console.log('beat-saber end');
        var elem = document.querySelector('#sabre-bleu');
        elem.parentNode.removeChild(elem);

        elem = document.querySelector('#sabre-rouge');
        elem.parentNode.removeChild(elem);

        this.removeSound();
        this.game.phaseEnd();
    }

    public hit(): void {
        this.hitCount++;
        if (this.hitCount === this.notes.length) {
            this.end();
        }
    }

    public addCubes(): void {
        var sceneEl = document.querySelector('a-scene');
        let timeRatio = 60 / this.track._beatsPerMinute;

        this.notes = this.track._notes.filter(n => (n._time + 10) * timeRatio < (this.duration + this.songStartOffset - 5 ) && (n._time + 10) * timeRatio > (this.songStartOffset - 5 ));


        this.notes.forEach(note => {
            let color = note._type === 0 ? 'red' : 'blue';
            var xPos = this.cubesPosition[0] - note._lineIndex * 0.2;
            var yPos = this.cubesPosition[1] - note._lineLayer * 0.2;
            var zPos = this.cubesPosition[2];
            var delay = ((note._time + 10) * timeRatio - this.songStartOffset) * 1000;

            var cubeEl = document.createElement('a-box');
            cubeEl.setAttribute('color', color);
            cubeEl.setAttribute('position', `${xPos} ${yPos} ${zPos}`);
            cubeEl.setAttribute('opacity', `0.8`);
            cubeEl.setAttribute('bs-cube', 'color: ' + (color === 'blue' ? 'bleu' : 'rouge') + ';');
            cubeEl.setAttribute('geometry', `width: 0.2; height: 0.2; depth: 0.2;`);
            cubeEl.setAttribute('animation', `property: position; to:${xPos} ${yPos} ${zPos - 5}; loop: false; dur: 5000; delay: 0`);

            setTimeout(() => {
                sceneEl.appendChild(cubeEl);
            }, delay);
        });
    }

    public addSound(): void {
        if (!this.soundEl) {
            this.soundEl = document.querySelector('#echaillon-sound');
        }
    }

    public removeSound(): void {
        this.soundEl.parentNode.removeChild(this.soundEl);
    }

    public buttonClick(action: string): void {

    }

}