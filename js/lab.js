$(function(){

$('.top').on('click',function(){
    scrollTo(0,0);
});

$('.toggle').on('click',function(){
  $('.control').toggleClass('active');
  $(this).toggleClass('active')
 $('.toggle span').toggleClass('active');
})
var barWidth = $('.incorrect').width();
$('.bar_bottom').width(barWidth);
var idx=1;
  $('.bar_top').on('click',function(){
    idx++;
    if(idx % 2 == 0){
      $('.bar_bottom').animate({
        width:'700',
        top:'150px'
      });
    }else{
      $('.bar_bottom').animate({
        width:barWidth,
        top:'0'
      })
    }
  })

 
  $('.lab_bar p').on('click',function(){
    $(this).siblings().slideToggle("slow");
  });
  
  
});