$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top -60
          }, 1000);
          return false;
        }
      }
      return true;
    });
  });


$(window).scroll(function(){
    if ($(window).scrollTop() >= 676) {
        $('.nav-archive').addClass('sticky-block');
        $('.nav-archive-hidden-spacer').addClass('show-spacer');
    }
    else {
        $('.nav-archive').removeClass('sticky-block');
        $('.nav-archive-hidden-spacer').removeClass('show-spacer');
    }
});


$('.menu-item').on('click', function(){
    $('.menu--primary').toggleClass('menu-open');
    $('.menu-item').toggleClass('menu-item-active');
    $('.header').toggleClass('header-active');
    $('.menu--item').html($('.menu--item').html() == 'close' ? 'menu' : 'close');
});

$('.search-btn').on('click', function(){
    $('#search-container').toggleClass('search-open');
});

$('.search-btn-close').on('click', function(){
    $('#search-container').toggleClass('search-open');
});

$(".speaker-item-frame").on('click', function(){
    $(this).parent().toggleClass('speaker-item-details-active').siblings().removeClass('speaker-item-details-active');
    $('body').toggleClass('overlay-active');
});

$(".modal-close").on('click', function(){
    $(this).parent().parent().toggleClass('speaker-item-details-active').siblings().removeClass('speaker-item-details-active');
    $('body').toggleClass('overlay-active');
});

$('#d1-btn').on('click', function(){
    $('#d2, #d3, #d4').removeClass('agenda--content-open');
    $('#d1').addClass('agenda--content-open');
    $('#d1-btn').addClass('active-item');
    $('#d2-btn, #d3-btn, #d4-btn').removeClass('active-item');
});

$('#d2-btn').on('click', function(){
    $('#d1, #d3, #d4').removeClass('agenda--content-open');
    $('#d2').addClass('agenda--content-open');
    $('#d2-btn').addClass('active-item');
    $('#d1-btn, #d3-btn, #d4-btn').removeClass('active-item');
});

$('#d3-btn').on('click', function(){
    $('#d1, #d2, #d4').removeClass('agenda--content-open');
    $('#d3').addClass('agenda--content-open');
    $('#d3-btn').addClass('active-item');
    $('#d1-btn, #d2-btn, #d4-btn').removeClass('active-item');
});

$('#d4-btn').on('click', function(){
    $('#d1, #d2, #d3').removeClass('agenda--content-open');
    $('#d4').addClass('agenda--content-open');
    $('#d4-btn').addClass('active-item');
    $('#d1-btn, #d2-btn, #d3-btn').removeClass('active-item');
});

$('#d2-main-btn').on('click', function(){
    $('#d2-forum-content').removeClass('agenda--content-open');
    $('#d2-main-content').addClass('agenda--content-open');
    $('#d2-main-btn').addClass('btn-agenda-active');
    $('#d2-forum-btn').removeClass('btn-agenda-active');
});

$('#d2-forum-btn').on('click', function(){
    $('#d2-main-content').removeClass('agenda--content-open');
    $('#d2-forum-content').addClass('agenda--content-open');
    $('#d2-forum-btn').addClass('btn-agenda-active');
    $('#d2-main-btn').removeClass('btn-agenda-active');
});

$('#d3-main-btn').on('click', function(){
    $('#d3-forum-content').removeClass('agenda--content-open');
    $('#d3-main-content').addClass('agenda--content-open');
    $('#d3-main-btn').addClass('btn-agenda-active');
    $('#d3-forum-btn').removeClass('btn-agenda-active');
});

$('#d3-forum-btn').on('click', function(){
    $('#d3-main-content').removeClass('agenda--content-open');
    $('#d3-forum-content').addClass('agenda--content-open');
    $('#d3-forum-btn').addClass('btn-agenda-active');
    $('#d3-main-btn').removeClass('btn-agenda-active');
});

$('#d4-main-btn').on('click', function(){
    $('#d4-forum-content').removeClass('agenda--content-open');
    $('#d4-main-content').addClass('agenda--content-open');
    $('#d4-main-btn').addClass('btn-agenda-active');
    $('#d4-forum-btn').removeClass('btn-agenda-active');
});

$('#d4-forum-btn').on('click', function(){
    $('#d4-main-content').removeClass('agenda--content-open');
    $('#d4-forum-content').addClass('agenda--content-open');
    $('#d4-forum-btn').addClass('btn-agenda-active');
    $('#d4-main-btn').removeClass('btn-agenda-active');
});

$(document).ready( function(){

    $('.post-download-drop').click( function(event){
        event.stopPropagation();
        $('.inside-download-drop').toggle();
    });

    $(document).click( function(){
        $('.inside-download-drop').hide();
    });

});