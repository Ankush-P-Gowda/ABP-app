const stars = document.querySelector('.stars').children;

for(let i=0; i<stars.length; i++){
    stars[i].addEventListener("click",function(){
        for(let j=0; j<stars.length; j++){
            stars[j].classList.remove("fas");
            stars[j].classList.add("far");
        }
        for(let j=0; j<=i; j++){
            stars[j].classList.remove("far");
            stars[j].classList.add("fas");
        }
    })
}
