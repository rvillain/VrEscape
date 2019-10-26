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
    el.addEventListener('hitstart', (e: any) => {
        console.log('hitstart', e);
        window.game.start();
        el.parentNode.removeChild(el);
    });
  }
});


