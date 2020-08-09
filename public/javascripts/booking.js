// var dt = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// var cell="";
// var k=1;
// var endDate = new Date(
//   dt.getFullYear(),
//   dt.getMonth() + 1,
//   0
// ).getDate();

// // Month and Year
// function loadDate(){
//   document.getElementsByClassName("month")[0].innerText = months[dt.getMonth()];
//   document.getElementsByClassName("year")[0].innerText = dt.getFullYear();
// }
// function movePara(para){
//   if(para == 'prev'&& k >= 2){
//     dt.setDate(dt.getDate()-1);
//     k--;
//     loadDate();
//   }
//   if(para == 'next' && k<3){
//     dt.setDate(dt.getDate()+1);
//     k++;
//     loadDate();
//   }
// }
// ////////////////////////


// // Date Slider
// function date(){
//   let p = 0;
//   for(let i=dt.getDate(),j=dt.getDay(); i<endDate+1; i++,j++){
//     let date = i;
//     if(i == endDate && p<2){
//       endDate =new Date(
//         dt.getFullYear(),
//         dt.getMonth() + p + 2,
//         0
//       ).getDate();
//       i=0;
//       p++;
//     }
//     if(j == 7){
//       j = 0;
//     }
//     let day = days[j];
//     cell += "<div class='col-2'> <p>" + date + "</p> <p>" + day + "</p> </div>";
//   }
//   cell+="<div class='col-2'> <p></p> <p></p> </div><div class='col-2'> <p></p> <p></p> </div>";
//   document.getElementsByClassName("date")[0].innerHTML = cell;
// }
// date();
// ///////////////////////////

// $('.date').on('edge', function(event, slick, direction){
//   console.log('edge was hit')
// });

// $(document).ready(function(){
//     $('.date').slick({
//         centerMode: true,
//         centerPadding: '60px',
//         slidesToShow: 3,
//         slidesToScroll: 4,
//         autoplay: true,
//         autoplaySpeed: 2,
//         infinite:false,
//     });       
//   });
  

// $(document).ready(function(){
//   $('.time').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     autoplay: true,
//     autoplaySpeed: 5,
// });
// });

// let n=0;
// while(n <=10 ){
  
//           n++;
// }









