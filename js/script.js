$(document).ready(function() {
	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('a').on('click', function (e) {
        // e.preventDefault();

        var target = this.hash,
            $target = $(target);

       $('html, body').stop().animate({
        'scrollTop': $target.offset().top-100
		}, 100, 'swing', function () {
		});

        console.log(window.location);

        return false;
    });
	
});
