/**
 * Работа с размером текста
 */

$(document).ready(function()
{  
    if(window.innerWidth > 992)
    {
        const resize_ob = new ResizeObserver(function(entries) {
            // since we are observing only a single element, so we access the first element in entries array
            let rect = entries[0].contentRect;
        
            // current height	
            let height = rect.height;
        
            $('.business-technologies').css('maxHeight', height + "px");
        });
        resize_ob.observe(document.querySelector('.business__main-widgets'));
    }

    
    $('.media__play-button').simpleLightbox();

    let carouselPrev = $('.tech-prev');
    let carouselNext = $('.tech-next');
    console.log($('.tech-outer .item'))
    let itemsCount = $('.tech-outer .item').length;
    let currentTranslate = 0;
    let indexActive = 0;

    $('.tech-next').click(()=>{
        if(indexActive === itemsCount - 1)
            return;
        let active = $('.tech-carousel .active');
        let size=0;
        if($(window).innerWidth() <= 992)
        {
            size = active.width() + 20;
            currentTranslate += size;
            $('.tech-outer').css('transform', 'translateX(-'+currentTranslate+'px)')
        }
        else
        {
            size = active.height() + 24;
            currentTranslate += size;
            $('.tech-outer').css('transform', 'translateY(-'+currentTranslate+'px)')
        }
       
        $(active).next().toggleClass('active');
        $(active).toggleClass('active');

        indexActive++;
    });

    $('.tech-prev').click(()=>{
        if(indexActive === 0)
            return;


        let activePrev = $('.tech-carousel .active').prev();
        let size=0;
        if($(window).innerWidth() <= 992)
        {
            size = activePrev.width() + 20;
            currentTranslate -= size;
            $('.tech-outer').css('transform', 'translateX(-'+currentTranslate+'px)')
        }
        else
        {
            size = activePrev.height() + 24;
            currentTranslate -= size;
            $('.tech-outer').css('transform', 'translateY(-'+currentTranslate+'px)')
        }
        $(activePrev).toggleClass('active');
        $(activePrev).next().toggleClass('active');
        indexActive--;
    });


});

