var price = document.querySelectorAll('.col-8 h5:nth-of-type(2)');
let clicks = [{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0},{i:0,j:0}];

function cleanup(place,base,clean,back){
    let i = retrive(place,'i');
    console.log(i);
    if(i == 0){
        i++;
        store(place,'i',i);
        pricecheck(place,base,clean,back);
    }
    else{
        i = 0;
        store(place,'i',i);
        pricecheck(place,base,0,back);
    }
}

function back(place,base,clean,back){
    let j = retrive(place,'j');
    console.log(j);
    if(j == 0){
        j++;
        store(place,'j',j);
        pricecheck(place,base,clean,back);
    }
    else{
        j = 0;
        store(place,'j',j);
        pricecheck(place,base,clean,0);
    }
}

function pricecheck(place,base,clean,back){
    console.log(place,base,clean,back);
    if(clicks[place].i == 0 && clicks[place].j == 1 ){
        price[place].innerText = 'Rs.' + (base + back);
    }
    else if(clicks[place].i == 1 && clicks[place].j == 0){
        price[place].innerText = 'Rs.' + (base + clean);
    }
    else if(clicks[place].i == 1 && clicks[place].j == 1){
        price[place].innerText = 'Rs.' + (base + back + clean);
    }
    else{
        price[place].innerText = 'Rs.' + (base);
    }
}

function retrive(place,cha){
    if(cha == 'i'){
        return(clicks[place].i);
    }else{
        return(clicks[place].j);
    }
}

function store(place,cha,value){
    if(cha == 'i'){
        clicks[place].i = value;
    }else{
        clicks[place].j = value;
    }
}


$(function(){
    $('.col-4 .btn').on('click',function(){
        $('.bookingnav').addClass('animate__animated animate__rubberBand').one('webkitAnimationEnd animationed',function(){
            $(this).removeClass('animate__animated animate__rubberBand')
        });
    }); 
});