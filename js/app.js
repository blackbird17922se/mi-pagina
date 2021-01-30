$(document).ready(function(){
    var altura = $('#navbar').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop()>50){
            $('#navbar').addClass('shrink');
            $('#navbar').addClass('sombra');
        }else{
            $('#navbar').removeClass('shrink');
            $('#navbar').removeClass('sombra');
            $('#navbar').addClass('top');
        }
    })  ;  
});

