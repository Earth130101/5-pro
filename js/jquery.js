$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 180){
              $(this).addClass('active');
            }
        });
	});
	
	$(window).scroll(function (){
		$('.fadein-logo').each(function(){
			var elemPos = $(this).offset().top,
				scroll = $(window).scrollTop(),
				windowHeight = $(window).height();
			  if (scroll > elemPos - windowHeight + 200){
				  $(this).addClass('active-logo');
				}
			});
		});

		$(window).scroll(function (){
			$('.fadein2').each(function(){
				var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				  if (scroll > elemPos - windowHeight + 150){
					  $(this).addClass('active2');
					}
				});
			});


			$(function() {
 
				// ①タブをクリックしたら発動
				$('.tab li').click(function() {
			   
				  // ②クリックされたタブの順番を変数に格納
				  var index = $('.tab li').index(this);
			   
				  // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
				  $('.tab li').removeClass('active');
			   
				  // ④クリックされたタブにクリック済みデザインを適用する
				  $(this).addClass('active');
			   
				  // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
				  $('.area ul').removeClass('show').eq(index).addClass('show');
			   
				});
			  });


			  $(function() {
				var topBtn = $('.header');    
				topBtn.hide();
				//スクロールが100に達したらボタン表示
				$(window).scroll(function () {
					if ($(this).scrollTop() > 80) {
						topBtn.fadeIn();
					} else {
						topBtn.fadeOut();
					}
				});
			});


			$(window).scroll(function (){
				$('.fadein3').each(function(){
					var elemPos = $(this).offset().top,
						scroll = $(window).scrollTop(),
						windowHeight = $(window).height();
					  if (scroll > elemPos - windowHeight + 100){
						  $(this).addClass('active3');
						}
					});
				});


				$(function(){
					$('.js-modal-open').on('click',function(){
						$('.js-modal').fadeIn();
						return false;
					});
					$('.js-modal-close').on('click',function(){
						$('.js-modal').fadeOut();
						return false;
					});
				});

