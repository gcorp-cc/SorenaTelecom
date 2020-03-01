$(document).ready(function () {
    $('.sidenav').sidenav({
        edge: 'right'
    });
    $(".dropdown-trigger").dropdown();
    $('.slider').slider({
        indicators: false,
        height: 500,

    });
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.carousel').carousel({
        shift:15,
        numVisible:12,
        fullWidth:true,
    });

    $(this).scroll(function () {
        var $h = $(window).scrollTop();

        if ($h > 420) {
            $('#navbar').removeClass("transparent z-depth-0");
            $('#navbar').addClass("nav-gradiant ");
        }
        else {
            $('#navbar').addClass("transparent z-depth-0");
            $('#navbar').removeClass("nav-gradiant");
        }

    });

});
