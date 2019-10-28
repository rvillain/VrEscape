import { BeatSaberPhase } from './phases/beat-saber-phase';
import { Phase } from './phases/phase';
import { BizPhase } from './phases/biz-phase';
import { FindSaberPhase } from './phases/find-saber-phase';
import { Constants } from './constants';
import { MooonPhase } from './phases/moon-phase';

export class GameManager {

    constructor() {
        this.phases = [];
        this.phases.push(new FindSaberPhase(this));
        this.phases.push(new BeatSaberPhase(this));
        this.phases.push(new BizPhase(this));
        this.phases.push(new MooonPhase(this));
        this.currentPhase = this.phases[0];
        this.currentTime = 600;

        let startStr = localStorage.getItem(Constants.startKey);
        let phaseStr = localStorage.getItem(Constants.phaseKey);

        if (startStr) {
            let duration = Math.floor((Date.now() - parseInt(startStr)) / 1000);
            let diff = this.currentTime - duration;
            if (diff < 0) {
                localStorage.removeItem(Constants.startKey);
                localStorage.removeItem(Constants.phaseKey);
            }
            else {
                this.currentTime = diff;
                let phaseIndex = parseInt(phaseStr);
                this.currentPhase = this.phases[phaseIndex];
            }
            setTimeout(() => {
                this.start(false);
            }, 550);
        }

        setTimeout(() => {
            this.timerEl = document.getElementById('timer');
            this.updateTimer();
        }, 500);

    }
    public phases: Phase[];
    public currentPhase: Phase;

    public timer: Timer;
    public timerEl: any;
    public currentTime: number;

    public start(gameNotStarted = true): void {
        if (gameNotStarted) {
            localStorage.setItem(Constants.startKey, Date.now().toString());
            localStorage.setItem(Constants.phaseKey, '0');
        }
        else {
            let btEl = document.querySelector('#start-button');
            if (btEl) {
                btEl.parentNode.removeChild(btEl);
            }
        }
        this.currentPhase.start();
        this.moveLight();
        this.timer = new Timer(this);
        this.updateScoreBoard();
        this.startMusic();
    }

    public startMusic() {
        (document.querySelector('#music') as any).components.sound.playSound();
    }
    public stopMusic() {
        (document.querySelector('#music') as any).components.sound.stopSound();
    }

    public phaseEnd() {
        console.log('phase end');
        const index = this.phases.indexOf(this.currentPhase) + 1;

        if (this.phases.length == index) {
            // game end
        }
        else {
            this.currentPhase = this.phases[index];
            this.moveLight();
            this.moveScoreboard();
            this.currentPhase.start();
            this.updateScoreBoard();
        }
    }

    public end() {

    }

    public moveLight() {
        let lightEl = document.getElementById('light');
        lightEl.setAttribute('animation', `property: position; to:${this.currentPhase.lightPosition}; loop: false; dur: 3000;`);
    }
    public moveScoreboard() {
        let lightEl = document.getElementById('scoreboard');
        lightEl.setAttribute('position', this.currentPhase.scoreboardPosition);
        lightEl.setAttribute('rotation', this.currentPhase.scoreboardRotation);
    }

    public updateScoreBoard() {

        const index = this.phases.indexOf(this.currentPhase);
        const stepsCount = this.phases.length;

        const steps = document.getElementById('steps');
        steps.setAttribute('value', 'Phases: ' + index + '/' + stepsCount);
    }
    public updateTimer() {
        var minutes = Math.floor(this.currentTime / 60);
        var seconds: any = this.currentTime - minutes * 60;
        seconds = seconds < 10 ? ('0' + seconds) : seconds;
        this.timerEl.setAttribute('value', minutes + ':' + seconds);
    }
}

class Timer {
    constructor(private game: GameManager) {
        game.updateTimer();
        let intervalId = setInterval(() => {

            this.game.currentTime = this.game.currentTime - 1;

            this.game.updateTimer();

            if (this.game.currentTime === 0) {
                clearInterval(intervalId);
                this.game.end();
            }
        }, 1000);
    }
}
