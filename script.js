$(document).ready(function(){
	$("#desktop-nav-wrapper").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		//event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top-90}, 500);
	});
	
	$(".container").fadeIn(3000);
	
	//$(".container").animate({"transform" : "translateY (-70%)", "transition": "transform 5000ms"});
	$(".container").css({transform: 'translateY(-70%)', transition : 'transform 3000ms'});
	
});