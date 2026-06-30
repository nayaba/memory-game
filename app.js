/*-------------------------------- Constants --------------------------------*/

const emojisArr = [
    '🌸', '🌸',
    '🍓', '🍓',
    '🐱', '🐱',
    '🧁', '🧁',
    '🌙', '🌙',
    '⭐', '⭐',
    '🧋', '🧋',
    '🎀', '🎀'
]

/*-------------------------------- Variables --------------------------------*/
let firstCard = ''
let secondCard = ''

/*------------------------ Cached Element References ------------------------*/
const cardsEls = document.querySelectorAll(".card")
const startBtn = document.querySelector('#start')
const timeEl = document.querySelector('#time')
const cardsContainerEl = document.querySelector('#cards-container')
const messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/

cardsEls.forEach(function(cardItem, i){
    cardItem.addEventListener('click', function(event){
        event.target.textContent = emojisArr[i]

        if (firstCard){
            secondCard = event.target
            // run check match function
        } else {
            firstCard = event.target
        }

        console.log(firstCard, secondCard)
    })
})

/*-------------------------------- Functions --------------------------------*/

// check match function should compare cards, then reset them to empty strings

