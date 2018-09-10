var canvas = document.getElementById("canvas");
var textbox = document.getElementById("textbox");
var ctx = canvas.getContext('2d');

function redraw() {
  ctx.textAlign="left"
  ctx.fillStyle = "blue"
  ctx.font = "140px 'UD Digi Kyokasho NP-B'";
  ctx.fillText("textbox", canvas.width, canvas.height);
}

function saveImage() {
  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "image.png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

