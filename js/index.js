$(function(){
    $('.ban_text a').eq(1).on('click',function(){
        $('.free_trial').show();
        $('.free').show();  
    });

    $('.free img').on('click',function(){
        $('.free_trial').hide();
        $('.free').hide();
    });
});