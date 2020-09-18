var price = document.querySelectorAll('.col-8 h5:nth-of-type(2)');


function pricecheck(i,j){
    price[i].innerText = 'Rs.' + j
}


$(function(){
    $('.col-4 .btn').on('click',function(){
        $('.bookingnav').addClass('animate__animated animate__rubberBand').one('webkitAnimationEnd animationed',function(){
            $(this).removeClass('animate__animated animate__rubberBand')
        });
    }); 
});