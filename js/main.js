$(document).ready(function(){
    $(function() {
        if(jQuery(window).width() < 768) {
            $('.headline-form-card').css({opacity: 0, top: "750px"});
            $(document).ready(function() {
                $('.headline-form-card').animate({opacity: 1, top: "235px"}, 1000);  
            })
         } else if (jQuery(window).width() < 1024 && jQuery(window).width() > 768) {
            $('.headline-form-card').css({opacity: 0, top: "750px"});
            $(document).ready(function() {
                $('.headline-form-card').animate({opacity: 1, top: "500px"}, 1000);
            });
         }   
        })
    });