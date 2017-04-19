
$('.menu-item').on('click', function(){
    $('.menu--primary').toggleClass('menu-open');
    $('.menu--item').html($('.menu--item').html() == 'close' ? 'menu' : 'close');
});

 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    }