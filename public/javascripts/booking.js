var dt = new Date();
var start = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function RenderCalender(){
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();
    var endDay = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDay();
    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    var nextDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 2,
        0
    ).getDate();

    start.setDate(1);
    var sday = start.getDay();
    var eday = endDay;
  var cell="";
  document.getElementsByClassName("months")[0].innerText = months[dt.getMonth()];
  document.getElementsByClassName("year")[0].innerText = dt.getFullYear();
  for(x=sday; x>0; x--){
      cell+="<p class='shadecolor prevmonth'>"+(prevDate-x)+"</p>"
  }
  for(i=1; i<=endDate; i++){
      cell+="<p>"+i+"</p>";
  }
  if(endDay!=6){
    for(y=eday,i=1 ;y<6 ; y++,i++){
        cell+="<p class='shadecolor nextmonth'>"+i+"</p>";
  }
}
  document.getElementsByClassName("date")[0].innerHTML = cell;
}


function movePara(para){
    let i = dt.getMonth();
    if(para == 'prev'){
        i--;
        dt.setMonth(i);
        console.log(i);
        start.setMonth(i);
    }else if(para == 'next'){
        i++;
        dt.setMonth(i);
        console.log(i);
        start.setMonth(i);
    }
    RenderCalender();
}










