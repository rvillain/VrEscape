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
    el.addEventListener('hit', (e: any) => {
      if (e.detail != null && e.detail.el != null && e.detail.el.classList.contains('saber')) {
        window.game.start();
        el.parentNode.removeChild(el);
      }
    });
  }
});


