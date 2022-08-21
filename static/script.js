let navbar = document.getElementById('navBar');
let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');
let index =0;
openBtn.addEventListener('click',()=>{
    navbar.style.left = '0%';
});
closeBtn.addEventListener('click',()=>{
    navbar.style.left = '-100%';
});

let initialNavLi = Array.from(document.querySelectorAll('.initialNav li'));

// print(initialNavLi);
// console.log(initialNavLi.indexOf(initialNavLi[1]));
// console.log(initialNavLi);
initialNavLi.forEach((li)=>{
li.addEventListener('click',()=>{
    console.log("Entered");
    while(index<initialNavLi.length){
        initialNavLi[index].classList.remove('active');
        index++;
    }
    li.classList.add('active');
    index=0;    

})
});