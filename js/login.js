$(function () {
    $('.pw_view').on('click', function (e) {
        e.preventDefault();

        $('.pw_view svg').toggleClass('active');
        if ($('.pw_view svg').hasClass('active') == true) {
            $('.pw').attr('type', 'text');
        } else {
            $('.pw').attr('type', 'password');
        }
    });

    //email 인증 창 열기
    $('.submit_btn').on('click',function(e){
        e.preventDefault();
        $('.pop_bg').show();
        $('.email_pop').show();
    });

    //email 인증 창 닫기
    $('.email_close').on('click', function () {
        $('.pop_bg').hide();
        $('.email_pop').hide();
    });

    //비밀번호 찾기 팝업창 열기
    $('.forgot_pw a').on('click', function (e) {
        e.preventDefault();
        $('.pw_popup').show();
        $('.pop_bg').show();
    });

    //비밀번호 찾기 팝업창 닫기
    $('.close').on('click', function () {
        $('.pw_popup').hide();
        $('.pop_bg').hide();
    });
});