$(document).ready(function() {
    
    $('.lnb ul li').on('click',function(){

        //li 클릭 시 하이라이트 조절
        $('.lnb ul li').removeClass('on active')
        $('.lnb ul li').children('ul').css("display","none");
    
        $(this).children('ul').css("display","block");
        $(this).addClass('on active')

    });

    $('.lnb > ul > li > a').on('click',function(e){
        // e.preventDefault();
        $('.lnb ul li').removeClass('on active')
        
        //session에 저장
        var idx = $(this).parent().index();
        localStorage.setItem("pageNum",idx)

        //a태그의 부모(li)에 하이라이터 주기
        $(this).parent().addClass('on active');
        
        //하위네비 보여주기
        $('.lnb > ul > li > ul').css('display','none')
        $(this).next('ul').css('display','block');
        
        // test, concept, tips 클릭 시 reading에 효과주기
        var subOn = 0;
        localStorage.setItem("subOn",subOn);
        // $('.lnb > ul > li > a').next().children().children().removeClass('active');
        if(localStorage.pageNum >= 2){
            location.href = $(this).attr('href');       
            $(this).next().children().eq(localStorage.subOn).children().addClass('active')
        }

        localStorage.removeItem("subPageNum")
    });

    $('.lnb ul li ul li a').on('click',function(){
        var subIdx = $(this).parent().index();
        localStorage.setItem("subPageNum",subIdx);

        $('.lnb ul li ul li a').removeClass('active');
        $(this).addClass('active')
    });

    $('.lnb > ul > li').eq(localStorage.pageNum).addClass('on active');
    $('.lnb > ul > li').eq(localStorage.pageNum).children().css('display','block');
    $('.lnb > ul > li > ul li').eq(localStorage.subPageNum).children().addClass('active')

    // $('.lnb ul li ul li').on('click',function(e){
    //     // e.preventDefault();
    //     $('.lnb ul li a').removeClass('active');
    //     $(this).addClass('active');
    //     var subIdx = $(this).parent().index();
    //     sessionStorage.setItem("subPageNum",subIdx);
    // });

    // if(sessionStorage.subPageNum >= 2){
    //     $('.lnb > ul > li > ul > li').eq(sessionStorage.subPageNum).addClass('active');
    // }
    // $('.lnb > ul > li > ul > li').eq(2).find('a').addClass('active');
    // console.log($('.lnb > ul > li > ul > li').eq(2).find('a'))
});