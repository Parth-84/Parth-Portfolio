function show_cards(){
    let cards = document.querySelectorAll('.services-card');
    for(let i=0;i<cards.length;i++){
    let windowHeight = window.innerHeight;
    let card_top = cards[i].getBoundingClientRect().top;
    let card_px = 70;
if(card_top < windowHeight - card_px){
    cards[i].classList.add("show-service");
}
else{
    cards[i].classList.remove("show-service");
    
}
}
// console.log(cards);
}

window.addEventListener("scroll",show_cards);