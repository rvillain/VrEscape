AFRAME.registerComponent('start-button', {
  schema: {
  },

  init: function () {
    var el = this.el;

    el.setAttribute('aabb-collider', 'objects: .hand');

    el.addEventListener('click', function (e: any) {
      window.game.start();
      el.parentNode.removeChild(el);
    });
    // el.addEventListener('hitstart', (e: any) => {
    //   window.game.start();
    //   el.parentNode.removeChild(el);
    // });
    el.addEventListener('grab-start', (e: any) => {
      window.game.start();
      el.parentNode.removeChild(el);
    });
  }
});


