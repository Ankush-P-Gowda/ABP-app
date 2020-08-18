const viewbtn = document.querySelectorAll('.detail p:nth-of-type(2)');
const view = document.querySelectorAll('.detail');
const height = document.querySelectorAll('.offer');
const viewdet = document.querySelectorAll('.offer .row:nth-of-type(3)');

for(let i=0; i<viewbtn.length; i++){
    viewbtn[i].addEventListener("click",function(){
        view[i].classList.toggle('rounded-bottom')
        height[i].classList.toggle('height');
        viewdet[i].classList.toggle('transform');
    })
}