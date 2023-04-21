const cards = document.querySelectorAll('.memory-card');

let cardbeenflipped = false;
let lockBoard = false;
let firstCard,secondCard;

//flip the memeory card
 function flipCard(){
  if (lockBoard)return;
  if(this === firstCard) return;
  this.classList.add('flip');
  if (!cardbeenflipped){
    cardbeenflipped = true;
    firstCard = this;
    return;
  }else{
  cardbeenflipped = false
  secondCard = this
    
 }
//  secondCard= this;
console.log(firstCard,secondCard);
    Matchforcard();
  }

  //
    function Matchforcard(){
    console.log(firstCard.dataset,secondCard.dataset)
    console.log("hello")
  if (firstCard.dataset.frameworks === secondCard.dataset.frameworks)
      {disableCards();
     }else{
      unflipCards();
     }
    }
  //this is for disabling the cards when fipped
  function disableCards(){
    firstCard.removeEventListener('click',flipCard);
       secondCard.removeEventListener('click', flipCard);
       resetBoard();
  }
//this unflip the card
function unflipCards(){
  // lockBoard = true;

  setTimeout(()=> {
    console.log(firstCard.classList,secondCard.classList);
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    // lockBoard = false; 
    //resetBoard();
  }, 500);
}
//double card click fix
 function resetBoard() {
  cardbeenflipped  = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}
//put cards in random order
(function shuffle() {
  cards.forEach(card =>{
    let cardOrder = Math.floor(Math.random()*10);
    card.style.order = cardOrder;
  });
})();
  
//make card interactive
cards.forEach(card => card.addEventListener('click',flipCard));
