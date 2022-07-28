$(document).ready(function(){

    $('.gallery a').simpleLightbox();    
    $('.media__play-button').simpleLightbox();

    $('.view-structure .table').click(function(e){
        e.preventDefault();
        if($(this).hasClass('selected'))
            return;

        $('.media').each((function(item){
            $(this).removeClass('row')
        }));

        $(this).toggleClass('selected')
        $('.view-structure .rows').toggleClass('selected');
    });

    $('.view-structure .rows').click(function(e){
        e.preventDefault();
        if($(this).hasClass('selected'))
            return;

            $('.media').each((function(item){
                $(this).addClass('row')
            }));

        $(this).toggleClass('selected')
        $('.view-structure .table').toggleClass('selected');
    });
});