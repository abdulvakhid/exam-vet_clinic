var elModalOpenButton = document.querySelector(".site-header__question-link--openmodal");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal--show");
})


var elModalCloseButton = document.querySelector(".connection__close");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal--show");
})