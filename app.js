/*-------------------------------- Constants --------------------------------*/

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
let time = 30
let timesUp = false
let matchesMade = 0

/*------------------------ Cached Element References ------------------------*/
const cardsEls = document.querySelectorAll(".card")
const startBtn = document.querySelector('#start')
const timeEl = document.querySelector('#time')
const cardsContainerEl = document.querySelector('#cards-container')
const messageEl = document.querySelector('#message')

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
            setTimeout(flipCard, 500)
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
    checkWinner()
  })
})

startBtn.addEventListener('click', function(){
    imgSrcArr.sort(function(){return 0.5 - Math.random()})
    cardsContainerEl.classList.remove('disabled')
    cardsEls.forEach(function (cardItem){
        cardItem.classList.remove('disabled')
        cardItem.src = 'assets/card-back.png'
    })
    messageEl.textContent = 'GAME OVER'
    messageEl.classList.add('hidden')
    matchesMade = 0
    time = 30

    const runTimer = setInterval(function(){
        time -= 1
        timeEl.textContent = `${time} seconds left`
    }, 1000)
    setTimeout(() => {
    clearInterval(runTimer)
    timesUp = true
    cardsContainerEl.classList.add('disabled')
    messageEl.classList.remove('hidden')
}, 30000)
// if (time === 0) {
//     time = 30
// }

    // startBtn.textContent = 'Start'

    // start button starts the interval again when pressed more than once before 30 secs up
})

/*-------------------------------- Functions --------------------------------*/
function checkForMatch () {
    if (firstCard.src === secondCard.src) {
        matchesMade++
        return true
    }
}

function checkWinner(){
    if (matchesMade === 8) {
        messageEl.textContent = 'YOU WIN!'
    }
}