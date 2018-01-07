$(document).ready(function(){
    $('.about').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;' 
	});


    $('.home-js').click(function(){
		$('html, body').animate({scrollTop: $('.banner ').offset().top}, 1500);
    });

    $('.about-js').click(function(){
		$('html, body').animate({scrollTop: $('.about').offset().top}, 1500);
    });
    $('.services-js').click(function(){
		$('html, body').animate({scrollTop: $('.services ').offset().top}, 1500);
    });

    $('.portfolio-js').click(function(){
		$('html, body').animate({scrollTop: $('.portfolio').offset().top}, 1500);
	});

	$('.contact-js').click(function(){
		$('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
    });
});
