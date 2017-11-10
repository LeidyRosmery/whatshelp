let estado = false;
const animationIn = () => {
    $('.tooltip').addClass('hidden-tooltip');
    $('#container-floating').css('height', '150px');
    $('.plus').addClass('animate-plus-in');
    $('.close-widget').addClass('animate-close-widget-in');
    $('.nds--nd3').addClass('animate-nd3-in');
    $('.nds--nd1').addClass('animate-nd1-in');
}

const animationOut = () => {
    $('.tooltip').removeClass('hidden-tooltip');
    $('.tooltip').addClass('show-tooltip');
    $('.plus').removeClass('animate-plus-in');
    $('.plus').addClass('animate-plus-out');
    $('.close-widget').removeClass('animate-close-widget-in');
    $('.close-widget').addClass('animate-close-widget-out');
    $('.nds--nd3').removeClass('animate-nd3-in');
    $('.nds--nd1').removeClass('animate-nd1-in');
    $('.nds--nd3').addClass('animate-nd3-out');
    $('.nds--nd1').addClass('animate-nd1-out');
}

$('#container-floating').mouseover(function() {
    animationIn();
});

$('#container-floating').on('mouseout', function() {
    animationOut();
});

$('#btn-messenger').on('click', function() {
    $('#container-floating').off('mouseover');
    $('#container-floating').off('mouseout');
    $('.message-fb').removeClass('fb-in');
    $('#container-floating').css('height', '52px');
    $('.message-fb').addClass('fb-out');
    $('.nds--nd3').removeClass('animate-nd3-in');
    $('.nds--nd1').removeClass('animate-nd1-in');
});
/*animation btn button message*/

$('.close-fb').on('click', function() {
    //animationIn();
    $('.tooltip').removeClass('hidden-tooltip');
    $('.tooltip').addClass('show-tooltip');
    $('.plus').removeClass('animate-plus-in');
    $('.plus').addClass('animate-plus-out');
    $('.close-widget').removeClass('animate-close-widget-in');
    $('.close-widget').addClass('animate-close-widget-out')
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
    window.open('https://api.whatsapp.com/send?phone=51999098154', '_system');
});
/*version mobil*/

var isAndroid = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
if (isAndroid) {
    $(document).find('.tooltip').remove();
    $(document).find('.tooltiptext').remove();
    $('#btn-messenger').off('click');
    $('#btn-messenger').on('click', function() {
        window.open('fb://messaging/compose/104392946274411');
    });
    $('#container-floating').off('mouseout');
    $('#container-floating').off('mouseover');
    $('#floating-button').css('cursor', 'none');
    $('#container-floating').on('click', function() {
        if (estado) {
            console.log('true');
            animationOut();
            estado = false;
        } else {
            console.log('false');
            animationIn();
            estado = true;
        }

    });

}
