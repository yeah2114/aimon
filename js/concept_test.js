$(function(){

    //피드백
    $('.test_nav a').eq(1).on('click',function(){
        $('.feedback').show();
    });
    $('.feed img').on('click',function(){
        $('.feedback').hide();
    });

    //튜토리얼
    $('.test_nav a').eq(0).on('click',function(){
        $('.concept_tuto').show();
    });
    $('.notShow a').on('click',function(){
        $('.concept_tuto').hide();
    });

    //설명 열기
    $('.pen').on('click',function(){
        $(this).toggleClass('active');
        $('.explain_slide').toggleClass('active');
    });


    // con_type_detail 문제풀이 활성화
    $('.con_type_detail ul li p').on('click',function(){
        var idx = $(this).parents().index();
        $('.con_type_detail ul li').removeClass('active');
        $(this).parents().addClass('active');
        $('.con_type_detail ul li').eq(idx).find('input[type=radio]').prop('checked',true);
        $(this).removeClass('active');
    })

    $('.con_type_detail ul li label').on('click',function(){
        var idx = $(this).parents().index();
        $('.con_type_detail ul li').removeClass('active');
        $(this).parents().addClass('active');
        $('.con_type_detail ul li').eq(idx).find('input[type=radio]').prop('checked',true);
        $(this).removeClass('active');
    });

    // con_type_detail 선택 취소
    $('.con_type_detail ul li a').on('click',function(){
        var idx = $(this).parents().index();
        $('.con_type_detail ul li').eq(idx).find('input[type=radio]').prop('checked',false);
        $(this).parents().removeClass('active');
        $('.con_type_detail ul li').eq(idx).find('p').toggleClass('active');
    });
});