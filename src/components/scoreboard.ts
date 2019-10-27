AFRAME.registerComponent('scoreboard', {
    schema: {
    },
    init: function () {
        var el = this.el;

        el.setAttribute('id', 'scoreboard');

        let innerHTML = `<a-text id="timer" value="" position="0 0.2 0" text=""></a-text>
      <a-text id="steps" scale="0.5 0.5 0.5" value="" position="0 -0.2 0" text=""></a-text>`;

        el.innerHTML = innerHTML;
    }
});


