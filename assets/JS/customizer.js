$(window).scroll(function () { 
    if ($(this).scrollTop() > 600) { 
        $('.navbar').addClass("fixed-top bg-color-blue")
    } else { 
        $('.navbar').removeClass("fixed-top bg-color-blue")         
    } 
}); 