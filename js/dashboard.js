$(function(){
    
    //sat, act tab
    $('.dash_sub a').on('click',function(){
        var index = $(this).index();
        $('.dash_sub a').removeClass('active');
        if(index == 1){
            $('.ani').css('left','2px');
            $(this).addClass('active');
        }else if(index==2){
            $('.ani').css('left','50%');
            $(this).addClass('active');
        }
        
        if($('.dash_sub a').eq(0).hasClass('active') == true){
            //sat 활성화
            scrollTo(0,0);
            $('.act').hide();
            $('.sat').show();
            $('.link h2').text('SAT');
            $('.link div ul li').remove();
            $('.link div ul').append("<li><span>Reading</span> <a href='sat_reading.html'>Begin Practice</a></li><li><span>Writing</span> <a href='sat_writing.html'>Begin Practice</a></li><li><span>Math</span> <a href='sat_math.html'>Begin Practice</a></li>");
        } else{
            //act 활성화
            scrollTo(0,0);
            $('.sat').hide();
            $('.act').show()
            $('.link h2').text('ACT');
            $('.link div ul li').remove();
            $('.link div ul').append("<li><span>Reading</span> <a href='act_reading.html'>Begin Practice</a></li><li><span>English</span> <a href='act_english.html'>Begin Practice</a></li><li><span>Math</span> <a href='act_math.html'>Begin Practice</a></li><li><span>Science</span> <a href='act_science.html'>Begin Practice</a></li>");
            
        }
    });

    $('.top').on('click',function(){
        scrollTo(0,0);
    });

    $('.toggle').on('click',function(){
        $('.control').toggleClass('active');
        $(this).toggleClass('active')
       $('.toggle span').toggleClass('active');
    })

    var canvas = document.querySelector('canvas');
    function canvasSize(){
        canvas.style.width='100%';
        canvas.width = canvas.offsetWidth;
    }
    canvasSize(canvas);
    
});