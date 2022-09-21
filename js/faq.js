$(function(){
    $('.tab li').on('click',function(){
        $('.tab li').removeClass('active');
        $(this).addClass('active');

        var tabIdx = $(this).index();
        $('.tab_contents ul').removeClass('active');
        $('.tab_contents ul').eq(tabIdx).addClass('active')
        $('.tab_contents ul li').removeClass('active');
    });

    $('.tab_contents ul li').on('click',function(){
        $('.tab_contents ul li').removeClass('active');
        $(this).addClass('active');
    });
});