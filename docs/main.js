var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
  var img = new Image();
  img.src = "https://s3-ap-northeast-1.amazonaws.com/alserver.jp/media_attachments/files/000/068/987/original/3dfdf98d851f4dfe.png";
  ctx.drawImage(img, 0, 0);
  ctx.font = '100px serif';
  ctx.lineJoin = 'round';
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
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(1,0,-0.4,1,0,0);
  var posx = 70;
  var posy = 100;
  var text = textbox.value;
}
