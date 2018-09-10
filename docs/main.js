var canvas, ctx, textbox;

window.onload = function () {
canvas = document.getElementById("canvas");
textbox = document.getElementById("textbox");
ctx = canvas.getContext('2d');
ctx.font = "140px UD Digi Kyokasho NP-B";
};

function saveImage() {
  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "image.png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function redraw() {
  var text = textbox.value;
  ctx.fillStyle = "black";
  ctx.fillText(text, canvas.width, canvas.height);
}



