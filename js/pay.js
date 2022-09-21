$(function(){
    $('.pay_tab li').on('click',function(){
        $('.pay_tab li').removeClass('active');
        $(this).addClass('active');

        var payTabIdx = $(this).index();
        $('.pay_contents ul').removeClass('active');
        $('.pay_contents ul').eq(payTabIdx).addClass('active');
    });

    $('.pay_contents ul li').on('click',function(){
        $('.pay_contents ul li').removeClass('active');
        $(this).addClass('active');

        var membership = $(this).find('p').eq(0).text();
        var price = $(this).find('p').eq(1).text();
        var tax = 0;
        var subTotal = price - tax;
        $('.pay_summary ul').find('li').eq(0).find('p').eq(0).text('Membership for ' + membership);
        $('.pay_summary ul').find('li').eq(0).find('p').eq(1).text(price);
        $('.pay_summary ul').eq(1).find('li').find('p').eq(1).text(subTotal)
    });

    $('.pay_summary button').on('click',function(){
        window.location.href = 'pay_complete.html';
    });
});