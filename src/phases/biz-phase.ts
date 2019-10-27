import { GameManager } from './../game-manager';
import { Phase } from './phase';

export class BizPhase extends Phase {

    private boardEl: HTMLElement;
    public isMoonDown = false;
    public moonUpPos = '-8.03381 2.4 -11.2535';
    public moonDownPos = '-8.03381 0.9 -11.2535';

    constructor(game: GameManager) {
        super(game);
        this.lightPosition = '-8.65385 2 -9';
        this.scoreboardPosition = '-4.43 1.45 -10';
        this.scoreboardRotation = '0 -90 0';
    }

    public start(): void {
        this.sceneEl = document.querySelector('a-scene');
        (document.querySelector('#kerbal-music') as any).components.sound.playSound();
        this.createBoard();
        this.addGameItems();
    }
    public end(): void {
        document.querySelector('#salle-biz').innerHTML = '';
        this.game.phaseEnd();
    }

    public createBoard() {
        this.boardEl = document.createElement('a-entity');
        this.boardEl.setAttribute('id', 'biz-board');
        this.boardEl.setAttribute('position', '-4.41392 1.43847 -9.71405');
        this.boardEl.setAttribute('rotation', '0 -90 0');

        let html = `<a-box color="#882233" width="1.5" height="3" depth="0.02" material="color: #a24004" geometry="height: 1"></a-box>`;

        this.boardEl.innerHTML = html;

        this.sceneEl.appendChild(this.boardEl);
    }

    public addGameItems() {
        var html = `
            <a-entity gltf-model="#laptop-gltf" position="-8.2 0.927 -7.02159" scale="0.035 0.035 0.035" rotation="0 0 0"></a-entity>
            <a-entity gltf-model="#moon-gltf" id="moon-btn" btn-action="action: end" aabb-collider position="${this.moonUpPos}" scale="0.003 0.003 0.003" rotation=""></a-entity>
            <a-entity position="-8.23802 0.93566 -7.08512" scale="" grabbable btn-action="action: toggleMoon">
                <a-box width="0.05" height="0.03" depth="0.05" color="#DD0022" material="" geometry="width: 0.024; depth: 0.024" position=""></a-box>
            </a-entity>
            `;
        document.querySelector('#salle-biz').innerHTML = html;
    }

    public buttonClick(action: string): void {
        switch (action) {
            case 'toggleMoon':
                let targetPos = this.isMoonDown ? this.moonUpPos : this.moonDownPos;
                document.querySelector('#moon-btn').setAttribute('animation', `property: position; to: ${targetPos}; loop: false; dur: 3000; delay: 0`);
                this.isMoonDown = !this.isMoonDown;
                break;
            case 'end':
                this.end();
                break;
        }
    }
}