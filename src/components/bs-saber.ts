import { GameManager } from '../game-manager';
import { FindSaberPhase } from '../phases/find-saber-phase';

declare var AFRAME: any;
declare var THREE: any;
declare var game: GameManager;
declare var $: any;

(() => {

  AFRAME.registerComponent('bs-saber', {
    schema: {
      color: { type: 'string' },
      grab: { objects: 'string' },
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>

      el.classList.add('saber');

      el.addEventListener('click', (e) => {
        this.grab(e);
      });

      if (data.grab) {
        el.addEventListener('grab-start', (e) => {
          console.log('grabstart');
          this.grab(e);
        });
        el.addEventListener('hitstart', (e) => {
          console.log('hitstart');
          this.grab(e);
        });
      }
    },

    grab: function (e: any) {
      var data = this.data;
      var fsPhase = game.phases.filter(p => p instanceof FindSaberPhase)[0] as FindSaberPhase;
      fsPhase.findSaber(data.color);
    }
  });

})();