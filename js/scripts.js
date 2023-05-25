// Плавная анимация карточек
window.addEventListener("scroll", function() {
    var cards = document.querySelectorAll(".product-card");
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var cardTop = card.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      if (cardTop < windowHeight) {
        card.classList.add("appear");
      }
    }
  });
  

 //Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

