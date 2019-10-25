import { BeatSaberPhase } from './phases/beat-saber-phase';
import { Phase } from './phases/phase';
import { BizPhase } from './phases/biz-phase';

export class GameManager {

    constructor() {
        this.phases = [];
        this.phases.push(new BeatSaberPhase(this));
        this.phases.push(new BizPhase(this));
        this.currentPhase = this.phases[0];
    }
    public phases: Phase[];
    public currentPhase: Phase;

    private timer: Timer;
    public timerEl: any;

    public start(): void {
        this.currentPhase.start();
        this.moveLight();
        this.timerEl = document.getElementById('timer');
        this.timer = new Timer(60 * 10, this);
        this.updateScoreBoard();
    }

    public phaseEnd() {
        const index = this.phases.indexOf(this.currentPhase) + 1;

        if (this.phases.length < index) {
            // game end
        }
        else {
            this.currentPhase = this.phases[index];
            this.moveLight();
            this.currentPhase.start();
        }
        this.updateScoreBoard();
    }

    public end() {

    }

    public moveLight() {
        let lightEl = document.getElementById('light');
        lightEl.setAttribute('animation', `property: position; to:${this.currentPhase.lightPosition}; loop: false; dur: 3000;`);
    }

    public updateScoreBoard() {

        const index = this.phases.indexOf(this.currentPhase);
        const stepsCount = this.phases.length;

        const steps = document.getElementById('steps');
        steps.setAttribute('value', 'Phases: ' + index + '/' + stepsCount);
    }
    public updateTimer(counter: number) {
        this.timerEl.setAttribute('value', counter);
    }
}

class Timer {
    constructor(public counter = 90, game: GameManager) {
        game.updateTimer(counter);
        let intervalId = setInterval(() => {

            this.counter = this.counter - 1;

            game.updateTimer(this.counter);

            if (this.counter === 0) {
                clearInterval(intervalId);
                game.end();
            }
        }, 1000);
    }
}
