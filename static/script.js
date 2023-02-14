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
    // window.onscroll();
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
    if (sectionTop > 60 && sectionTop < 425) {
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

// Automatically update year
let current_year = document.getElementById("current-year");
let date = new Date();
current_year.innerHTML = date.getFullYear();
