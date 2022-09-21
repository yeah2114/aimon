$(function(){

    $('.sat_ban_text a').eq(1).on('click',function(){
        $('.free_trial').show();
        $('.free').show();  
    });
    $('.sat_con4 a').eq(1).on('click',function(){
        $('.free_trial').show();
        $('.free').show();  
    });

    $('.free img').on('click',function(){
        $('.free_trial').hide();
        $('.free').hide();
    });
});