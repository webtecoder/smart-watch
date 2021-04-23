

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
    centerMode: true,
    prevArrow:'<i class="fas fa-arrow-left"></i>',
    nextArrow:'<i class="fas fa-arrow-right"></i>',
  });
  
  // start new section
  $('.device-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  // scroll to top js
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('#scroll').addClass('scroll-show');
    }
    else{
      $('#scroll').removeClass('scroll-show');
    }
  })

  $('#scroll').click(function(){
    $('html, body').animate({
      scrollTop: 0
    },500)
  });