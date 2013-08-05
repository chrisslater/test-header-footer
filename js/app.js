jQuery(document).ready(function(){
    console.log('yay');
    var $body = $('body');



    setPosition($body.find('.header'), "top");
    setPosition($body.find('.footer'), "bottom");
    // Remove the class to reveal the header.


    
    function setPosition(obj, direction, height){
        height = typeof height !== "undefined" ? height : obj.height();

        obj.css(direction, "-" + height + "px");
    }

    function show() {
        
    }

    $body.find(".show-header").click(function(){
        $(".header, .footer").animate({
            top: 0,
            bottom: 0
        }, 400, function(){
            $body.removeClass('.hide-header');
        });
    });

});