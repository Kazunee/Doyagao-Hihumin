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
    /* Imageオブジェクトを生成 */
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = "100px 'ＭＳ ゴシック'";
        fld1.value = canvas.toDataURL();
    };
    img.src = "https://s3-ap-northeast-1.amazonaws.com/alserver.jp/media_attachments/files/000/068/987/original/3dfdf98d851f4dfe.png";
}
