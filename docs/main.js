var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
};

function redraw() {
  ctx.textAlign="left"
  ctx.fillStyle = "black"
  ctx.font = "140px 'UD Digi Kyokasho NP-B'";
  ctx.fillText(textbox, canvas.width, canvas.height);
}

function saveImage() {
  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "image.png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

