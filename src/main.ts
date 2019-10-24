import 'jquery';
import 'aframe';
import 'aframe-extras';
import 'aframe-event-set-component';
import 'aframe-template-component';
import 'aframe-geometry-merger-component';
import 'aframe-teleport-controls';
import 'aframe-physics-system';
import 'aframe-physics-extras';
import 'super-hands';
import { GameManager } from './game-manager';
import './components/buff-color';
import './components/bs-cube';
import './components/start-button';

declare global {
    interface Window { game: GameManager; }
}

window.game = new GameManager();


