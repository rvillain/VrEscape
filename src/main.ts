import * as $ from 'jquery';
import 'aframe';
import 'aframe-extras';
import 'aframe-event-set-component';
// import 'aframe-template-component';
import 'aframe-geometry-merger-component';
import 'aframe-aabb-collider-component';
import 'aframe-teleport-controls';
import 'aframe-physics-system';
// import 'aframe-physics-extras';
import 'super-hands';
import { GameManager } from './game-manager';
import './components/buff-color';
import './components/bs-cube';
import './components/bs-saber';
import './components/start-button';
import './components/scoreboard';

declare global {
    interface Window { game: GameManager; $: any; }
}

window.game = new GameManager();
window.$ = $;


