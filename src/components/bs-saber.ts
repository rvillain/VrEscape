import { BeatSaberPhase } from '../phases/beat-saber-phase';
import { GameManager } from '../game-manager';

declare var AFRAME: any;
declare var THREE: any;
declare var game: GameManager;
declare var $: any;

(() => {

  AFRAME.registerComponent('bs-saber', {
    schema: {
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>

      el.addEventListener('grabbed', () => {
        // Suppression du cube à la fin de l'animation
        console.log('grabbed');
      });
      el.addEventListener('grabstart', (e: any) => {
        // Suppression du cube à la fin de l'animation
        console.log('gStart', e);
      });
      el.addEventListener('grabend', (e: any) => {
        // Suppression du cube à la fin de l'animation
        console.log('gEnd', e);
      });
      el.addEventListener('grabbing', (e: any) => {
        // Suppression du cube à la fin de l'animation
        console.log('grabbing', e);
      });
    },
  });

})();