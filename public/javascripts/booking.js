var dt = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 
function loadDate(){
  document.getElementsByClassName("month")[0].innerText = months[dt.getMonth()];
  document.getElementsByClassName("year")[0].innerText = dt.getFullYear();
}
function movePara(para){
  if(para == 'prev'){
    dt.setMonth(dt.getMonth()-1);
    loadDate();
  }else{
    dt.setMonth(dt.getMonth()+1);
    loadDate();
  }
}

$(document).ready(function(){
    $('.date').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

$(document).ready(function(){
  $('.time').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
});
});







