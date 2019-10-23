import 'jquery';
import 'aframe';
import 'aframe-template-component';
import 'aframe-geometry-merger-component';
import 'aframe-event-set-component';

import { GameManager } from './game-manager';
// import { StartButtonRegister } from './components/start-button';

import './components/buff-color';
import './components/bs-cube';
import './components/start-button';

declare global {
    interface Window { game: GameManager; }
}

window.game = new GameManager();

