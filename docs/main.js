var canvas, ctx , textbox;

function saveImage() {
  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "image.png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function redraw() {
  canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var str = document.info.message.value;
    alert(str);
}
