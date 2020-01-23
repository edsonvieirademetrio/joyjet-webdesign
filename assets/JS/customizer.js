$(window).scroll(function () { 
    if ($(this).scrollTop() > 150) { 
        $('.navbar').addClass("fixed-top bg-color-blue")
        this.console.log('passou')       
    } else { 
        $('.navbar').removeClass("fixed-top bg-color-blue")         
    } 
}); 