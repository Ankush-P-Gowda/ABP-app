var price = document.querySelectorAll('.col-8 h5:nth-of-type(2)');
let clicks = [{i:0},{i:0}];

function pricecheck(place,base,add){
    let i = retrive(place);
    console.log(i);
    if(i == 0){
        i++;
        store(place,i);
        price[place].innerText = 'Rs.' + (base + add);
    }else{
        i = 0;
        store(place,i);
        price[place].innerText = 'Rs.' + (base);
    }
}

function retrive(place){
    return(clicks[place].i);
}

function store(place,value){
    clicks[place].i = value;
}

$(function(){
    $('.col-4 .btn').on('click',function(){
        $('.bookingnav').addClass('animate__animated animate__rubberBand').one('webkitAnimationEnd animationed',function(){
            $(this).removeClass('animate__animated animate__rubberBand')
        });
    }); 
});