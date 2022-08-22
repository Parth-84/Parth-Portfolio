let navbar = document.getElementById('navBar');
let initialNav = document.getElementById('initialNav');
let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');
let index =0;
let initialNav_left;
openBtn.addEventListener('click',()=>{
    let current_style = window.getComputedStyle(initialNav);
    // console.log(current_style.left);
    
    if(window.innerWidth <= "900"){
        if(current_style.left === '0px'){
            initialNav.style.left = initialNav_left;
        }
        else{
        initialNav_left = current_style.left;
        // console.log(initialNav_left);
        initialNav.style.left = '0%';
        }
    }
    else{
        navbar.style.left = '0%';
    }
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
    // console.log("Entered");
    while(index<initialNavLi.length){
        initialNavLi[index].classList.remove('active');
        index++;
    }
    li.classList.add('active');
    index=0;    

})
});



let home = document.getElementById('home'); 
let about = document.getElementById('about'); 
let services = document.getElementById('services'); 
let contact = document.getElementById('contact'); 
let social = document.getElementById('connect-social'); 

// indi_links.forEach(element=>{
//     let ele_top = element.getBoundingClientRect().top;
//     let windowHeight = window.innerHeight
//     if(windowHeight === ele_top){
//         let index=0;
//         while(index<initialNavLi.length){
//             initialNavLi[index].classList.remove('active');
//             index++;
//         }
//         element.classList.add('active');
//     }
// });

// function moveIndicator(){
//     let indi_links = [home,about,services,contact,social];
//     // console.log(indi_links);
//     for(let i=0;i<indi_links.length;i++){
//         let windowHeight = window.innerHeight;
//         let ele_top = (indi_links[i]).getBoundingClientRect().top;
//         if(ele_top < windowHeight-50){
//             let index=0;
//             while(index<initialNavLi.length){
//                     initialNavLi[index].classList.remove('active');
//                     index++;
//                 }
//             initialNavLi[i].classList.add('active');
//             // index=0;
//         }
//     }
// };
// window.addEventListener("scroll",moveIndicator);