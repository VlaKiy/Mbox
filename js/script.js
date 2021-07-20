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
});

