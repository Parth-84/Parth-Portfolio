let navbar = document.getElementById("navBar");
let initialNav = document.getElementById("initialNav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let index = 0;
let initialNav_left;
openBtn.addEventListener("click", () => {
  let current_style = window.getComputedStyle(initialNav);
  // console.log(current_style.left);

  if (window.innerWidth <= "900") {
    if (current_style.left === "0px") {
      initialNav.style.left = initialNav_left;
    } else {
      initialNav_left = current_style.left;
      // console.log(initialNav_left);
      initialNav.style.left = "0%";
    }
  } else {
    navbar.style.left = "0%";
  }
});
closeBtn.addEventListener("click", () => {
  navbar.style.left = "-100%";
});

let initialNavLi = Array.from(document.querySelectorAll(".initialNav li"));
initialNavLi.forEach((li) => {
  li.addEventListener("click", () => {
    // console.log("Entered");
    window.onscroll();
    while (index < initialNavLi.length) {
      initialNavLi[index].classList.remove("active");
      index++;
    }
    li.classList.add("active");
    index = 0;
  });
});

let sections = document.querySelectorAll("section");

window.onscroll = (param) => {
    if(param){
    let i=0;
  sections.forEach((section) => {
    let sectionTop = section.getBoundingClientRect().top;
    if (sectionTop > 60 && sectionTop < 400) {
      initialNavLi.forEach((link) => {
        if (initialNavLi.indexOf(link) === i) {
          link.classList.add("active");
        } else {
            let a = link.firstElementChild;
          link.classList.remove("active");
        }
      });
    }
    i++;
  });
}

};
// let home = document.getElementById('home');
// let about = document.getElementById('about');
// let services = document.getElementById('services');
// let skills = document.getElementById('skills');
// let contact = document.getElementById('contact');
// let social = document.getElementById('connect-social');

// let indi_links = [home,about,services,contact,social];
// window.onscroll = ()=>{
//     let current="";
//     indi_links.forEach(section=>{
//         const sectionTop = section.offsetTop;
//         if(pageYOffset >= sectionTop-60){
//             current = section.getAttribute("id");
//         }
//     });

//     initialNavLi.forEach((ele)=>{
//         ele.classList.remove("active");
//         if(ele.classList.contains(current)){
//             ele.classList.add("active");
//         }

//     })
// }

// let indi_links = [home,about,services,skills,contact,social];
// window.onscroll = ()=>{
//     let windowHeight = window.innerHeight
//   let i=0;
// indi_links.forEach(element=>{

//     let ele_top = element.getBoundingClientRect().top;
//         if(ele_top < windowHeight-500){
//           initialNavLi.forEach(link=>{
//             if(initialNavLi.indexOf(link)===i){
//                 link.classList.add('active');
//             }
//             else{
//                 link.classList.remove("active");
//             }
//           });
//         }
//         i++;

//     });
// };

// Automatically update year
let current_year = document.getElementById("current-year");
let date = new Date();
current_year.innerHTML = date.getFullYear();
