$(function(){
    $('.logoutNo').on('click',logout);

    function logout(){
        $('.logout_popbg').hide();
        $('.logout_pop').hide();
    }
    $('.loginVer a').eq(2).on('click',function(){
        $('.logout_popbg').show();
        $('.logout_pop').show();
    });

    // $('.lnb ul li').on('click',function(){

    //     $('.lnb ul li').removeClass('on active')
    //     $('.lnb ul li').children('ul').css("display","none");

    //     $(this).children('ul').css("display","block");
    //     $(this).addClass('on active')
    //     console.log($(this).text())
    // });

    
    // $('.lnb ul li ').eq(localStorage.pageNum).addClass('on active');

    // $('.lnb > ul > li').on('click',function(){
    //     localStorage.pageNum = $(this).index();
        
    // });
    // $('.lnb ul li a').on('click',function(){
    //     localStorage.removeItem('subPageNum');
    // })
    // $('.left_nav h1').on('click',function(){
    //     localStorage.clear();    
    //     $('.lnb ul li').removeClass('active');
    // });

    // // window.onbeforeunload = function(){
    // //     localStorage.clear();
    // //     $('.lnb ul li').removeClass('active');
    // // }

    // $('.lnb ul li ul li').eq(localStorage.subPageNum).addClass('active');
    // $('.lnb ul li ul li').on('click',function(){
    //     localStorage.subPageNum = $(this).index();
    // });
    // $('.lnb ul li ul li a').on('click',function(){
    //     localStorage.removeItem('subPageNum')
    // });
}); 