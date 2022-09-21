$(function(){
    $('.table_area table tbody tr').on('click',function(){
        window.location.href = 'tips_detail.html';
    });

    $('.table_area table tbody tr').css('cursor','pointer');
});