(function($){

	$.fn.addText2img = function(options) {

		var _opt = $.extend({
			text: 'sample',
			textset:{
				fillStyle: '#000',
				font: "130px UD Digi Kyokasho NP-B",
				textAling: 'left',
				textBaseline: 'top',
				x: 10,
				y: 10,
				lineHeight: 5
			}
		}, options);

		/*
		 * 改行してテキスト描画
		 */
		var lineFeed_fillText = function(_obj){
			var lines = _obj.text.split('\n');
			var lh    = _obj.context.measureText("あ").width + _obj.lineHeight;
			lines.forEach(function(line, i){
				_obj.context.fillText(line, _obj.x, _obj.y + lh * i);
			});
		};

		var i = 0;

		/*
		 * Main
		 */
		return this.each(function(){

			$this = $(this);

			// 作業用キャンバスを作成
			i++;
			$('body').append('<canvas style="display:none;"></canvas>');
			var $canvas = $('canvas')[i - 1];

			/*
			 * 画像設定
			 */
			var img = new Image();
			img.src = $this.attr('src');

			/*
			 * 画像に文字を合成して画像として出力する
			 */
			var drawImg = function(){

				// 画像のロード判定
				if (!img.complete){
					setTimeout(drawImg, 500);
					return;
				}

				// 画像をキャンバスに書き出し
				$canvas.width  = img.width;
				$canvas.height = img.height;
				var cvs2d = $canvas.getContext("2d");
				cvs2d.drawImage(img, 0, 0);

				// キャンバスのテキスト設定
				cvs2d.fillStyle    = _opt.textset.fillStyle;
				cvs2d.font         = _opt.textset.font;
				cvs2d.textAlign    = _opt.textset.textAling;
				cvs2d.textBaseline = _opt.textset.textBaseline;

				// キャンバスに改行されたテキストを描画
				lineFeed_fillText({
					context: cvs2d,
					text: _opt.text,
					x: _opt.textset.x,
					y: _opt.textset.y,
					lineHeight: _opt.textset.lineHeight
				});

				// キャンバスを画像として書き出し
				$this.attr("src", $canvas.toDataURL());

			}
			
			drawImg();

		});
	};
}(jQuery));
