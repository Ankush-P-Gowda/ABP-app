var price = document.querySelectorAll('.col-8 h5:nth-of-type(2)');
let i = 0;
let j = 0;

function cleanup(place,base,clean,back){
    if(i == 0){
        i++;
        pricecheck(place,base,clean,back);
    }
    else{
        i = 0;
        pricecheck(place,base,0,back);
    }
}

function back(place,base,clean,back){
    if(j == 0){
        j++;
        pricecheck(place,base,clean,back);
    }
    else{
        j = 0;
        pricecheck(place,base,clean,0);
    }
}

function pricecheck(place,base,clean,back){
    console.log(place,base,clean,back);
    if(i == 0 && j == 1 ){
        price[place].innerText = 'Rs.' + (base + back);
    }
    else if(i == 1 && j == 0){
        price[place].innerText = 'Rs.' + (base + clean);
    }
    else if(i == 1 && j == 1){
        price[place].innerText = 'Rs.' + (base + back + clean);
    }
    else{
        price[place].innerText = 'Rs.' + (base);
    }
}


$(function(){
    $('.col-4 .btn').on('click',function(){
        $('.bookingnav').addClass('animate__animated animate__rubberBand').one('webkitAnimationEnd animationed',function(){
            $(this).removeClass('animate__animated animate__rubberBand')
        });
    }); 
});