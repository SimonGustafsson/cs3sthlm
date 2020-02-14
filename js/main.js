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

$(window).scroll(function(){
    if ($(window).scrollTop() >= 670) {
        $('.agenda-content-header').addClass('sticky-block');
        $('.agenda-content-header-hidden-spacer').addClass('show-spacer');
    }
    else {
        $('.agenda-content-header').removeClass('sticky-block');
        $('.agenda-content-header-hidden-spacer').removeClass('show-spacer');
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

$(".update-open").on('click', function(){
    $('#update').addClass('update-group-shown');
});

$(".update-close").on('click', function(){
    $('#update').removeClass('update-group-shown');
});


// ARCHIVE

$(".archive-button-hexa").on('click', function(){
    $('#archive-speakers').addClass('speakers-block-list-hexas');
    $('#archive-speakers').removeClass('speakers-block-list-rows');
    $('.archive-button-hexa').addClass('archive-filter-list-item-active');
    $('.archive-button-rows').removeClass('archive-filter-list-item-active');
});
$(".archive-button-rows").on('click', function(){
    $('#archive-speakers').addClass('speakers-block-list-rows');
    $('#archive-speakers').removeClass('speakers-block-list-hexas');
    $('.archive-button-hexa').removeClass('archive-filter-list-item-active');
    $('.archive-button-rows').addClass('archive-filter-list-item-active');
});

// ARCHIVE FILTER _ NOT ACTIVE

$(".archive-button-keynote").on('click', function(){
    $('.archive-button-keynote').addClass('archive-filter-list-item-active');
    $('.archive-button-presentation').removeClass('archive-filter-list-item-active');
    $('.archive-button-training').removeClass('archive-filter-list-item-active');
    $('.archive-button-all').removeClass('archive-filter-list-item-active');
});

$(".archive-button-presentation").on('click', function(){
    $('.archive-button-presentation').addClass('archive-filter-list-item-active');
    $('.archive-button-keynote').removeClass('archive-filter-list-item-active');
    $('.archive-button-training').removeClass('archive-filter-list-item-active');
    $('.archive-button-all').removeClass('archive-filter-list-item-active');
});

$(".archive-button-training").on('click', function(){
    $('.archive-button-training').addClass('archive-filter-list-item-active');
    $('.archive-button-presentation').removeClass('archive-filter-list-item-active');
    $('.archive-button-keynote').removeClass('archive-filter-list-item-active');
    $('.archive-button-all').removeClass('archive-filter-list-item-active');
});

$(".archive-button-all").on('click', function(){
    $('.archive-button-all').addClass('archive-filter-list-item-active');
    $('.archive-button-presentation').removeClass('archive-filter-list-item-active');
    $('.archive-button-keynote').removeClass('archive-filter-list-item-active');
    $('.archive-button-training').removeClass('archive-filter-list-item-active');
});

// END ARCHIVE FILTER


// ARCHIVE - PRESENTATION EXTENDED

$(".presentation-row-button").on('click', function(){
    $(this).parent().toggleClass('presentation-row-extended');
    $(this).toggleClass('presentation-row-button-active');
});


$('#dayone-button').on('click', function(){
    $('#dayone-button').addClass('agenda-header-item-active');
    $('#daytwo-button, #daythree-button, #dayfour-button').removeClass('agenda-header-item-active');
    $('#dayone').addClass('agenda-day-active');
    $('#daytwo, #daythree, #dayfour').removeClass('agenda-day-active');
});

$('#dayone-mainstage-button').on('click', function(){
    $('#dayone-mainstage-button').addClass('agenda-content-header-item-active');
    $('#dayone-harlem-button, #dayone-stacken-button').removeClass('agenda-content-header-item-active');
    $('#dayone-mainstage').addClass('agenda-content-column-active');
    $('#dayone-harlem, #dayone-stacken').removeClass('agenda-content-column-active');
});
$('#dayone-harlem-button').on('click', function(){
    $('#dayone-harlem-button').addClass('agenda-content-header-item-active');
    $('#dayone-mainstage-button, #dayone-stacken-button').removeClass('agenda-content-header-item-active');
    $('#dayone-harlem').addClass('agenda-content-column-active');
    $('#dayone-mainstage, #dayone-stacken').removeClass('agenda-content-column-active');
});
$('#dayone-stacken-button').on('click', function(){
    $('#dayone-stacken-button').addClass('agenda-content-header-item-active');
    $('#dayone-mainstage-button, #dayone-harlem-button').removeClass('agenda-content-header-item-active');
    $('#dayone-stacken').addClass('agenda-content-column-active');
    $('#dayone-mainstage, #dayone-harlem').removeClass('agenda-content-column-active');
});

$('#daytwo-button').on('click', function(){
    $('#daytwo-button').addClass('agenda-header-item-active');
    $('#dayone-button, #daythree-button, #dayfour-button').removeClass('agenda-header-item-active');
    $('#daytwo').addClass('agenda-day-active');
    $('#dayone, #daythree, #dayfour').removeClass('agenda-day-active');
});

$('#daytwo-mainstage-button').on('click', function(){
    $('#daytwo-mainstage-button').addClass('agenda-content-header-item-active');
    $('#daytwo-harlem-button, #daytwo-stacken-button').removeClass('agenda-content-header-item-active');
    $('#daytwo-mainstage').addClass('agenda-content-column-active');
    $('#daytwo-harlem, #daytwo-stacken').removeClass('agenda-content-column-active');
});
$('#daytwo-harlem-button').on('click', function(){
    $('#daytwo-harlem-button').addClass('agenda-content-header-item-active');
    $('#daytwo-mainstage-button, #daytwo-stacken-button').removeClass('agenda-content-header-item-active');
    $('#daytwo-harlem').addClass('agenda-content-column-active');
    $('#daytwo-mainstage, #daytwo-stacken').removeClass('agenda-content-column-active');
});
$('#daytwo-stacken-button').on('click', function(){
    $('#daytwo-stacken-button').addClass('agenda-content-header-item-active');
    $('#daytwo-mainstage-button, #daytwo-harlem-button').removeClass('agenda-content-header-item-active');
    $('#daytwo-stacken').addClass('agenda-content-column-active');
    $('#daytwo-mainstage, #daytwo-harlem').removeClass('agenda-content-column-active');
});

$('#daythree-button').on('click', function(){
    $('#daythree-button').addClass('agenda-header-item-active');
    $('#dayone-button, #daytwo-button, #dayfour-button').removeClass('agenda-header-item-active');
    $('#daythree').addClass('agenda-day-active');
    $('#dayone, #daytwo, #dayfour').removeClass('agenda-day-active');
});

$('#daythree-mainstage-button').on('click', function(){
    $('#daythree-mainstage-button').addClass('agenda-content-header-item-active');
    $('#daythree-harlem-button, #daythree-stacken-button').removeClass('agenda-content-header-item-active');
    $('#daythree-mainstage').addClass('agenda-content-column-active');
    $('#daythree-harlem, #daythree-stacken').removeClass('agenda-content-column-active');
});
$('#daythree-harlem-button').on('click', function(){
    $('#daythree-harlem-button').addClass('agenda-content-header-item-active');
    $('#daythree-mainstage-button, #daythree-stacken-button').removeClass('agenda-content-header-item-active');
    $('#daythree-harlem').addClass('agenda-content-column-active');
    $('#daythree-mainstage, #daythree-stacken').removeClass('agenda-content-column-active');
});
$('#daythree-stacken-button').on('click', function(){
    $('#daythree-stacken-button').addClass('agenda-content-header-item-active');
    $('#daythree-mainstage-button, #daythree-harlem-button').removeClass('agenda-content-header-item-active');
    $('#daythree-stacken').addClass('agenda-content-column-active');
    $('#daythree-mainstage, #daythree-harlem').removeClass('agenda-content-column-active');
});

$('#dayfour-button').on('click', function(){
    $('#dayfour-button').addClass('agenda-header-item-active');
    $('#dayone-button, #daytwo-button, #daythree-button').removeClass('agenda-header-item-active');
    $('#dayfour').addClass('agenda-day-active');
    $('#dayone, #daytwo, #daythree').removeClass('agenda-day-active');
});

$('#dayfour-mainstage-button').on('click', function(){
    $('#dayfour-mainstage-button').addClass('agenda-content-header-item-active');
    $('#dayfour-harlem-button, #dayfour-stacken-button').removeClass('agenda-content-header-item-active');
    $('#dayfour-mainstage').addClass('agenda-content-column-active');
    $('#dayfour-harlem, #dayfour-stacken').removeClass('agenda-content-column-active');
});
$('#dayfour-harlem-button').on('click', function(){
    $('#dayfour-harlem-button').addClass('agenda-content-header-item-active');
    $('#dayfour-mainstage-button, #dayfour-stacken-button').removeClass('agenda-content-header-item-active');
    $('#dayfour-harlem').addClass('agenda-content-column-active');
    $('#dayfour-mainstage, #dayfour-stacken').removeClass('agenda-content-column-active');
});
$('#dayfour-stacken-button').on('click', function(){
    $('#dayfour-stacken-button').addClass('agenda-content-header-item-active');
    $('#dayfour-mainstage-button, #dayfour-harlem-button').removeClass('agenda-content-header-item-active');
    $('#dayfour-stacken').addClass('agenda-content-column-active');
    $('#dayfour-mainstage, #dayfour-harlem').removeClass('agenda-content-column-active');
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