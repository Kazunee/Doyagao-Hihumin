var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = "https://s3-ap-northeast-1.amazonaws.com/alserver.jp/media_attachments/files/000/068/562/original/46f0eaca010dee0c.png";
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
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 460, canvas.width, 60);
    ctx.textAlign="center"
    ctx.fillStyle = "black"
    ctx.font = "50px UD Digi Kyokasho NP-B";
    ctx.fillText(str, canvas.width, canvas.height);
}
