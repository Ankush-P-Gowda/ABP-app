var dt = new Date();
var start = new Date();
var today = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var j = 0;
    // dt.setMonth(11);start.setMonth(11);today.setMonth(11);

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
    //   cell+="<p class='shadecolor prevmonth' onclick=\"movePara(\'prev\')\">"+(prevDate-x+1)+"</p>"
      cell+="<label class=\"radiodates\"><input type=\"radio\" name=\"radio\" id=''><span class=\"radio-btn shadecolor prevmonth\" onclick=\"movePara(\'prev\')\">" +(prevDate-x+1)+ "</span></label>"
  }
  for(i=1; i<=endDate; i++){
      if(i==today.getDate() && dt.getMonth()==today.getMonth()){
    //   cell+="<p class='pink'>"+i+"</p>";
      cell+="<label class=\"radiodates\"><input type=\"radio\" name=\"radio\" id='' checked><span class=\"radio-btn pink\">" +i+ "</span></label>"
      }else{
        // cell+="<p>"+i+"</p>";
        cell+="<label class=\"radiodates\"><input type=\"radio\" name=\"radio\" id=''><span class=\"radio-btn\">" +i+ "</span></label>"

      }
  }
  if(endDay!=6){
    for(y=eday,i=1 ;y<6 ; y++,i++){
        // cell+="<p class='shadecolor nextmonth' onclick=\"movePara(\'next\')\">"+i+"</p>";
        cell+="<label class=\"radiodates\"><input type=\"radio\" name=\"radio\" id=''><span class=\"radio-btn shadecolor nextmonth\" onclick=\"movePara(\'next\')\">" +i+ "</span></label>"
  }
}
  document.getElementsByClassName("date")[0].innerHTML = cell;
}

function movePara(para){
    let i = dt.getMonth();
    if(para == 'prev' && j > 0){
        i--;
        dt.setMonth(i);
        console.log(i);
        console.log(j);
        start.setMonth(i);
        j=j-1;
    }else if(para == 'next' && j < 3){
        i++;
        dt.setMonth(i);
        console.log(i);
        console.log(j);
        start.setMonth(i);
        j=j+1;
    }
    RenderCalender();
}














