AFRAME.registerComponent('start-button', {
  schema: {
  },

  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      // var game = GameManager.CurrentGame;
      console.log(window.game);
      window.game.start();
      el.parentNode.removeChild(el);
    });
  }
});


