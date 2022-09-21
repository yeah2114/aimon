$(function () {

    //회원가입 버튼 클릭
    $('.submit').on('click', function () {
        chkPw();
        // window.location.href="dashboard.html" 대시보드 페이지 제작 후 주석 풀기
    });

    function chkPw() {
        var pw = $('.pw').val();
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        //글자수 제한
        if (pw.length < 8 || pw.length > 20) {
            alert('You must contain at least 1 capital, lowercase, digits and special characters.');
            return false;
        }
        if (pw.search(/&nbsp/) != 0) {
            alert("Password field must not be blank");
            return false;
        }
        if (num < 0 || eng < 0 || spe < 0) {
            alert("You must contain at least 1 capital, lowercase, digits and special characters.");
            return false;
        }
    }

    //email 팝업
    $('.emailConfirm').on('click', function () {
        $('.pop_bg').show();
        $('.email_pop').show();
    })
    $('.email_close').on('click', function () {
        $('.pop_bg').hide();
        $('.email_pop').hide();
    });

    //pw 텍스트 보이기
    $('.pw_view1').on('click', function (e) {
        e.preventDefault();

        $('.pw_view1 svg').toggleClass('active');
        if ($('.pw_view1 svg').hasClass('active') == true) {
            $('#pw1').attr('type', 'text');
        } else {
            $('#pw1').attr('type', 'password');
        }
    });

    $('.pw_view2').on('click', function (e) {
        e.preventDefault();

        $('.pw_view2 svg').toggleClass('active');
        if ($('.pw_view2 svg').hasClass('active') == true) {
            $('#pw2').attr('type', 'text');
        } else {
            $('#pw2').attr('type', 'password');
        }
    });

    //pw조건
    $('.pw').on('mouseenter', function () {
        $('.pw_info').show();
    });
    $('.pw').on('mouseleave', function () {
        $('.pw_info').hide();
    });

    //pw 일치 확인
    $('.pw').focusout(function () {
        var pwd1 = $('#pw1').val();
        var pwd2 = $('#pw2').val();

        if (pwd1 != '' && pwd2 == '') {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 != pwd2) {
                $('.match').css('display', 'inline-block');
            } else if (pwd1 == pwd2) {
                $('.match').css('display', 'none');
            }
        }
    });

    //actual 추가
    var count = 0;
    $('.plus').on('click', function (e) {
        e.preventDefault();
        count++;
        if (count == 1) {
            $('.actual').append('<div class="actual actual1"><input type="number" name="actual_sat" placeholder="Actual Score(SAT)"> <input type="number" name="actual_act" placeholder="Actual Score(ACT)"><p><input type="text" name="actual_date" placeholder="Acutal Score Date"></p></div>');
            $('.minus').css({
                'background': '#2393fd',
                'pointer-events': 'auto'
            })
        }
        else if (count == 2) {
            $(this).css({
                'background': '#ededed',
                'pointer-events': 'none'
            });
            $('.actual').append('<div class="actual actual2"><input type="number" name="actual_sat" placeholder="Actual Score(SAT)"> <input type="number" name="actual_act" placeholder="Actual Score(ACT)"><p><input type="text" name="actual_date" placeholder="Acutal Score Date"></p></div>');
        }
    });

    //actual 삭제
    $('.minus').on('click', function (e) {
        e.preventDefault();
        count--;
        if (count == 1) {
            $('.plus').css({
                'background': '#2393fd',
                'pointer-events': 'auto'
            });
            $('.actual2').remove();
        }
        else if (count == 0) {
            $(this).css({
                'background': '#ededed',
                'pointer-events': 'none'
            });
            $('.actual1').remove();
        }
    });

    $('.unsubscribe').on('click',function(){
        $('.unsubscribe_bg').show();
        $('.confirm_unsubscribe').show();
    });
    $('.unsubscribeYes').on('click',function(){
        $('.confirm_unsubscribe').hide();
        $('.unsubscribeOk').show();
    });
    $('.unsubscribeNo').on('click',function(){
        $('.unsubscribe_bg').hide();
        $('.confirm_unsubscribe').hide();
    });
});