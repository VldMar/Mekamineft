// здесь общие скрипты
$(document).ready(function()
{

    $('.tab-control').each(function()
    {
        let tabButtons = $(this).find('.tablink');
        let tabcontent = $(this).find('.tabcontent');
        $(tabcontent[0]).toggleClass('show')
        let indexActiveTab = 0;
   
        tabButtons.each(function(i){
            $(this).click(function()
            {
                if(i > tabcontent.length - 1 || indexActiveTab == i)
                return;
   
                $(tabButtons[indexActiveTab]).removeClass('tablink-active');
                $(tabcontent[indexActiveTab]).removeClass('show')
   
                $(this).addClass('tablink-active');
                $(tabcontent[i]).toggleClass('show')
                indexActiveTab = i;
            });
            if($(this).hasClass('hoverable')){
                $(this).mouseover(function()
                {
                    if(i > tabcontent.length - 1 || indexActiveTab == i)
                    return;
    
                    $(tabButtons[indexActiveTab]).removeClass('tablink-active');
                    $(tabcontent[indexActiveTab]).removeClass('show')
    
                    $(this).addClass('tablink-active');
                    $(tabcontent[i]).toggleClass('show')
                    indexActiveTab = i;
                });
            }            
        });       
    });
    
    /**
     * Работа с большим меню
     * Сначала "дродауны"
     * Потом открытие менюшек
     */
    $('.big-menu .tabcontent').each(function(i){
        const dropLinks = $(this).find(".drop-link");
        const drops = $(this).find(".subitem");
   
        if(dropLinks.length == 0 || drops.length == 0)
            return;
   
        $(drops[0]).css('display','block');
        $(dropLinks[0]).addClass('drop-link-active')
        let currentDrop = 0;
   
        for(let i = 0; i < dropLinks.length; i++)
        {
            if(i > drops.length - 1)
                break;
    
            let droplink = dropLinks[i];
    
            let dropCallback = function( event ) {
                event.preventDefault();
                drops[currentDrop].style.display = 'none';
                dropLinks[currentDrop].classList.remove('drop-link-active');
    
                dropLinks[i].classList.add('drop-link-active')
                drops[i].style.display = "block";
                currentDrop = i;
            };
    
            droplink.addEventListener("mouseover", dropCallback);
            droplink.addEventListener("click", dropCallback);
        }
        
    });
   
    // открытие менюшек
    $(".header .burger-open").click(function() {
        $(".big-menu").toggleClass('active');
    })
   
    $(".big-menu .burger-close").click(function() {
        $(".big-menu").toggleClass('active');
    })
    
    $(".navigation__burger").click(function() {
        $(this).toggleClass('fixed');
        $(this).toggleClass('burger__active');
        $(".header__navigation").toggleClass('active');
    })

    /* Работа с размером текста */
    let sizeStep = 4;
    let size = $('body').css('font-size');
    let sizeInt = parseInt(size);
   $('.text-options__small').click(function(){
    if($(this).hasClass('text-size-active'))
        return;
        $('body').css('font-size', sizeInt - sizeStep);

        $('.text-options__small').addClass('text-size-active');
        $('.text-options__normal').removeClass('text-size-active');
        $('.text-options__large').removeClass('text-size-active');
   });
   $('.text-options__normal').click(function(){
    if($(this).hasClass('text-size-active'))
        return;
        $('body').css('font-size', sizeInt);

        
        $('.text-options__normal').addClass('text-size-active');
        $('.text-options__small').removeClass('text-size-active');
        $('.text-options__large').removeClass('text-size-active');
   });
   $('.text-options__large').click(function(){
    if($(this).hasClass('text-size-active'))
        return;

    $('body').css('font-size', sizeInt + sizeStep);

    
    $('.text-options__large').addClass('text-size-active');
    $('.text-options__normal').removeClass('text-size-active');
    $('.text-options__small').removeClass('text-size-active');
   });

})     