$(document).ready(function(){
    screenWidth = $( window ).width();
    $('.headline-form-card').css({opacity: 0, top: "750px"});
    $(document).ready(function() {
        if (screenWidth < 481) {
            $('.headline-form-card').animate({opacity: 1, top: "200px"}, 1000);  
        } else if (screenWidth > 481 && screenWidth < 769) {
            $('.headline-form-card').animate({opacity: 1, top: "225px"}, 1000); 
        } else  if (screenWidth > 769 && screenWidth < 1025) {
            $('.headline-form-card').animate({opacity: 1, top: "235px"}, 1000);  
        } else {
            $('.headline-form-card').animate({opacity: 1, top: "330px"}, 1000); 
        }
    });

    $('.secondary-cta-text').css({opacity: 0, "margin-right": 300});
    $(document).scroll(function() {
        $('.secondary-cta-text').animate({opacity: 1, "margin-right": 0}, 1500);  
    });
});


