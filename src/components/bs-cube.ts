import { BeatSaberPhase } from '../phases/beat-saber-phase';
import { GameManager } from '../game-manager';

declare var AFRAME: any;
declare var THREE: any;
declare var game: GameManager;

(() => {

  AFRAME.registerComponent('bs-cube', {
    schema: {
      color: { type: 'string' }
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      el.setAttribute('aabb-collider', 'objects: #sabre-' + data.color);

      el.classList.add('cube');

      el.addEventListener('animationcomplete', () => {
        // Suppression du cube à la fin de l'animation
        el.parentNode.removeChild(el);
      });
      el.addEventListener('click', () => {
        this.cubeHit();
      });
      el.addEventListener('hitstart', (e: any) => {
          this.cubeHit();
      });
      el.addEventListener('hitend', (e: any) => {
          this.cubeHit();
      });
    },

    cubeHit: function () {
      var el = this.el;
      el.parentNode.removeChild(el);
      var bsPhase = game.phases.filter(p => p instanceof BeatSaberPhase)[0] as BeatSaberPhase;
      bsPhase.hit();
    }
  });

})();