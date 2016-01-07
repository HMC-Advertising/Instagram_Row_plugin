

(function($){

          $('.multiple-items').slick({
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 3
          });


          $('.instacenter').slick({
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 5,
              initialSlide: 12,
              
              responsive: [{
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
              }]
          });
}(jQuery))