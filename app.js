// create an array of elements
// create a start button (starts timer if using one)

/*-------------------------------- Constants --------------------------------*/
// create an array of images (for SRC)
const imgSrcArr = [
  "assets/cat.png",
  "assets/cupcake.png",
  "assets/duck.png",
  "assets/flower.png",
  "assets/moon.png",
  "assets/rainbow.png",
  "assets/star.png",
  "assets/strawberry.png",
  "assets/cat.png",
  "assets/cupcake.png",
  "assets/duck.png",
  "assets/flower.png",
  "assets/moon.png",
  "assets/rainbow.png",
  "assets/star.png",
  "assets/strawberry.png",
]

/*-------------------------------- Variables --------------------------------*/
let firstCard = ''
let secondCard = ''

/*------------------------ Cached Element References ------------------------*/
const cardsEls = document.querySelectorAll(".card")

/*----------------------------- Event Listeners -----------------------------*/
cardsEls.forEach(function (cardItem, i) {
  cardItem.addEventListener("click", function (event) {
    event.target.src = imgSrcArr[i]
    if (firstCard) {
        secondCard = event.target
    } else {
        firstCard = event.target
    }
    checkForMatch()
    if (firstCard && secondCard) {
        firstCard = ''
        secondCard = ''
    }
  })
})

/*-------------------------------- Functions --------------------------------*/
function checkForMatch () {
    if (firstCard.src === secondCard.src) {
        console.log('its a match')
    }
}