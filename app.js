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
let secondFlip = false

/*------------------------ Cached Element References ------------------------*/
const cardsEls = document.querySelectorAll(".card")
const startBtn = document.querySelector('#start')

/*----------------------------- Event Listeners -----------------------------*/
cardsEls.forEach(function (cardItem, i) {
  cardItem.addEventListener("click", function (event) {
    event.target.src = imgSrcArr[i]
    if (secondFlip) {
        secondCard = event.target
        if (checkForMatch()) {
            firstCard.classList.add('disabled')
            secondCard.classList.add('disabled')
            secondFlip = false
            console.log(secondFlip)
            firstCard = ''
            secondCard = ''
        } else {
            // i think this is happening right away so I need setTimeout
            setTimeout(flipCard, 1000)
            function flipCard() {
                firstCard.src = 'assets/card-back.png'
                secondCard.src = 'assets/card-back.png'
                secondFlip = false
                firstCard = ''
                secondCard = ''
            }

        }

    } else {
        firstCard = event.target
        secondFlip = true
    }

  })
})

startBtn.addEventListener('click', function(){
    imgSrcArr.sort(function(){return 0.5 - Math.random()})
    console.log(imgSrcArr)
})

/*-------------------------------- Functions --------------------------------*/
function checkForMatch () {
    if (firstCard.src === secondCard.src) {
        return true
    }
}