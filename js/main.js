
$('.menu-item').on('click', function(){
    $('.menu--primary').toggleClass('menu-open');
    $('.menu--item').html($('.menu--item').html() == 'close' ? 'menu' : 'close');
});

//$(".speaker--list-item").on('click', function(){
//    $(this).toggleClass('view-details').siblings().removeClass('view-details');
// })

$(document).ready( function(){

    $('.post-download-drop').click( function(event){
        event.stopPropagation();
        $('.inside-download-drop').toggle();
    });

    $(document).click( function(){
        $('.inside-download-drop').hide();
    });

});

 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationType: "fraction",
    });
    }