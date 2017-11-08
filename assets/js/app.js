const animationIn = () => {
    $('.tooltip').addClass('hidden-tooltip');
    $('#container-floating').css('height', '150px');
    $('.plus').addClass('animate-plus-in');
    $('.close-widget').addClass('animate-close-widget-in');
    $('.nd3').addClass('animate-nd3-in');
    $('.nd1').addClass('animate-nd1-in');
}

const animationOut = () => {
    $('.tooltip').removeClass('hidden-tooltip');
    $('.tooltip').addClass('show-tooltip');
    $('.plus').removeClass('animate-plus-in');
    $('.plus').addClass('animate-plus-out');
    $('.close-widget').removeClass('animate-close-widget-in');
    $('.close-widget').addClass('animate-close-widget-out')
    $('.nd3').removeClass('animate-nd3-in');
    $('.nd1').removeClass('animate-nd1-in');
    $('.nd3').addClass('animate-nd3-out');
    $('.nd1').addClass('animate-nd1-out');
}

$('#container-floating').mouseover(function() {
    animationIn();
});
/*refactorizando codigo*/


$('#container-floating').on('mouseout', function() {
    animationOut();
});

$('#btn-messenger').on('click', function() {
    $('#container-floating').off('mouseover');
    $('#container-floating').off('mouseout');
    $('.message-fb').removeClass('fb-in');
    $('#container-floating').css('height', '52px');
    $('.message-fb').addClass('fb-out');
    $('.nd3').removeClass('animate-nd3-in');
    $('.nd1').removeClass('animate-nd1-in');
});
/*animation btn button message*/

$('.close-fb').on('click', function() {
    animationIn();
    $('#container-floating').on('mouseover', function() {
        animationIn();
    });
    $('#container-floating').on('mouseout', function() {
        animationOut();
    });
    $('#container-floating').css('height', '52px');
    $('.message-fb').removeClass('fb-out');
    $('.message-fb').addClass('fb-in');
});

$('#btn-whatsapp').on('click', function() {
    window.open('https://api.whatsapp.com/send?phone=51991167297', '_blank');
});
