import { GameManager } from '../game-manager';
import { FindSaberPhase } from '../phases/find-saber-phase';

declare var AFRAME: any;
declare var THREE: any;
declare var game: GameManager;
declare var $: any;

(() => {

  AFRAME.registerComponent('btn-action', {
    schema: {
      action: { type: 'string' },
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>

      el.addEventListener('click', (e) => {
        this.click(e);
      });
      el.addEventListener('grab-start', (e) => {
        this.click(e);
      });
    },

    click: function (e: any) {
      var data = this.data;
      game.currentPhase.buttonClick(data.action);
    }
  });

})();