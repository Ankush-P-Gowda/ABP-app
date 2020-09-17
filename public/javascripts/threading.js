var price = document.querySelectorAll('.col-8 h5:nth-of-type(2)');
var addbtn = document.querySelectorAll('.col-4 .btn');


function pricecheck(i,j){
    price[i].innerText = 'Rs.' + j
}


$(function(){
    $('.col-4 .btn').on('click',function(){
        $('.bookingnav').addClass('animate__animated animate__heartBeat').one('webkitAnimationEnd animationed',function(){
            $(this).removeClass('animate__animated animate__heartBeat')
        });
    }); 
});