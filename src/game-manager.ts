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

    public start(): void {
        this.currentPhase.start();
        this.moveLight();
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
    }

    public moveLight() {
        var lightEl = document.getElementById('light');
        lightEl.setAttribute('animation', `property: position; to:${this.currentPhase.lightPosition}; loop: false; dur: 3000;`);
    }
}

