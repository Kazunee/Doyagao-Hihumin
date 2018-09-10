/* globals Canvas */
var _canvas = null;

window.onload = function () {
  var canvas = document.getElementById("canvas");
  _canvas = new Canvas(canvas);
};

function onToggle2(e) {
  _canvas.redrawTop();
}
