$(function(){
    $('#video-area').YTPlayer({
       fitToBackground: true,
       videoId: 'LSmgKRx5pBo'
   });

////////////////////////////////////////

  $('.owl-carousel').owlCarousel({
    thumbs: true,
    thumbsPrerendered: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true
  });


    $(".sticker").sticky({topSpacing:0});

    // jQuery smooth scroll
        $('.smooth-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '0';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 600, 'easeInOutExpo');

            event.preventDefault();
        });

        

});
