var price = document.querySelectorAll('.col-8 h5:nth-of-type(2)');

function updateValue(place,value){
    switch(value){
        case '1': price[place].innerText = 'Rs.' + 5000 +'(onwards)';break;
        case '2': price[place].innerText = 'Rs.' + 6500 +'(onwards)';break;
        case '3': price[place].innerText = 'Rs.' + 7500 +'(onwards)';break;
        case '4': price[place].innerText = 'Rs.' + 10000 +'(onwards)';break;
        default: console.log('invalid');
    }
}


$(function(){
    $('.col-4 .btn').on('click',function(){
        $('.bookingnav').addClass('animate__animated animate__rubberBand').one('webkitAnimationEnd animationed',function(){
            $(this).removeClass('animate__animated animate__rubberBand')
        });
    }); 
});