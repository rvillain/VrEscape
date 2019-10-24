import { BeatSaberPhase } from '../phases/beat-saber-phase';
import { GameManager } from '../game-manager';

declare var AFRAME: any;
declare var THREE: any;
declare var game: GameManager;

(() => {

  AFRAME.registerComponent('bs-cube', {
    schema: {
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.setAttribute('sphere-collider', 'objects: .saber');

      el.addEventListener('animationcomplete', () => {
        // Suppression du cube à la fin de l'animation
        el.parentNode.removeChild(el);
      });
      el.addEventListener('click', () => {
        this.cubeHit();
      });
      el.addEventListener('hit', (e: any) => {
        if (e.detail != null && e.detail.el != null && e.detail.el.classList.contains('saber')) {
          this.cubeHit();
        }
      });
      el.addEventListener('hitend', (e: any) => {
      });
    },

    cubeHit: function() {
      var el = this.el;
      el.parentNode.removeChild(el);
      var bsPhase = game.phases.filter(p => p instanceof BeatSaberPhase)[0] as BeatSaberPhase;
      bsPhase.hit();
    }
  });

})();