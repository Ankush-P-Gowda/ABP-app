let status = document.getElementsByClassName('status');
let button = document.getElementsByClassName('button');

for(let i=0; i<=status.length; i++){
    if(status[i].innerText == 'Cancelled'  || status[i].innerText == 'Finished'){
        button[i].classList.toggle('display');
    }
}