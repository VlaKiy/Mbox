$(document).ready(function(){
    $('.slider_first').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 319,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1

            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 899,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 1439,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3

            }
          }
          
        ]
      });

    $('.slider_second').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 319,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1

            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 899,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 1439,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3

            }
          }
          
        ]
    });

    $('.slider_third').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 319,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1

            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 899,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 1439,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2

            }
          }
          
        ]
    });

    $('.slider_fourth').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 319,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1

            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 899,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2

            }
          },
          {
            breakpoint: 1439,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3

            }
          }
          
        ]
    });

    $('.hero_section_header_nav a').click(function(){
        /*задали какой мы хотим отступ от верха страницы*/
        var otstupTop=100;
        $('body,html').animate({
        /*получили положение элемента вычли отступ и прокрутили*/
            scrollTop: $($(this).attr('href')).offset().top-otstupTop
        }, 1500);
    });

    $('.menu__box a').click(function(){
      /*задали какой мы хотим отступ от верха страницы*/
      var otstupTop=100;
      $('body,html').animate({
      /*получили положение элемента вычли отступ и прокрутили*/
          scrollTop: $($(this).attr('href')).offset().top-otstupTop
      }, 1500);
  });
  
});

