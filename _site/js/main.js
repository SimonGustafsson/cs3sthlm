
$('.menu-item').on('click', function(){
    $('.menu--primary').toggleClass('menu-open');
    $('.menu--item').html($('.menu--item').html() == 'close' ? 'menu' : 'close');
});

$('.search-btn').on('click', function(){
    $('#search-container').toggleClass('search-open');
});

$('.search-btn-close').on('click', function(){
    $('#search-container').toggleClass('search-open');
});

$(".speaker-block").on('click', function(){
    $(this).parent().toggleClass('view-details').siblings().removeClass('view-details');
    $('body').toggleClass('overlay-active');
});

$(".modal-close").on('click', function(){
    $(this).parent().parent().toggleClass('view-details').siblings().removeClass('view-details');
    $('body').toggleClass('overlay-active');
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

 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationType: "fraction",
    });
};

$(function() {
    $('.feed-news').vTicker();
});

SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><span>{path}</span><a href="{url}">{title}</a></li>',
    noResultsText: '<li><a href="#!">No results found.</a></li>',
    limit: 20,
    fuzzy: false,
    exclude: ['Welcome']
});