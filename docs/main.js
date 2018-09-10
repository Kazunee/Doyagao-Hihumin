var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
  ctx.font = '140px serif';
  ctx.lineJoin = 'round';
  var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 460, canvas.width, 60);
        ctx.textAlign="center";
        ctx.fillStyle = "white";
        ctx.font = "30px 'ＭＳ ゴシック'";
        ctx.fillText("見出しテキスト", canvas.width/2, canvas.height);
        fld1.value = canvas.toDataURL();
    };
    img.src = "photo.png";
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
    var str = document.info.message.value;
}
