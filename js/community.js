$(document).ready(function()
{     
    $(".big-title").fitText(0.7, { minFontSize: '29px', maxFontSize: '409px' });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });
});