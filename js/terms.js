$(function(){
    $('.terms_tab p').on('click',function(){
        $('.terms_tab p').removeClass('active');
        $(this).addClass('active');
        var tabText = $(this).text();
        var tabIdx = $(this).index();

        $('.terms_ban h2').text(tabText);
        $('.terms_contents div').removeClass('active');
        $('.terms_contents div').eq(tabIdx).addClass('active')
    });
});