$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
        dots: true
    });
});

$('.header-btn').on('click', function(){
    $('.menu').addClass('active');
});

$('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
});

$('.button').on('click', function(){
    $('.litebox').addClass('active-two'); 
});

$('.close-btn__request').on('click', function(){
    $('.litebox').removeClass('active-two'); 
});

$('.message-close__btn').on('click', function(){
    $('.message').removeClass('active-three'); 
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.litebox').removeClass('active-two');
			$('.message').addClass('active-three');
			//alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});