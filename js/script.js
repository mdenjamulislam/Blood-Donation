/*----------------------------------------------------------------------|
    Template name: Bood Donation Template
    Author: MD Enjamul Islam
    Author URL: mdenjamulislam527@gmail.com
    Versions: 1.0.0

|-----------------------------------------------------------------------*/




/*------------ Navbar js ---------------*/
$(document).ready(function(){
    var nav = $("#header").offset().top; 
    $(window).bind('scroll', function() { 
        if ($(window).scrollTop() > nav) {  
        $('#header').addClass('fixed');  
        } 
        else {  
        $('#header').removeClass('fixed');    
        } 
    });
});



/*------------------ Progress Counter ------------------*/

$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});




