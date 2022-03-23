const cardArray = [
    {
        name: '1',
        img: 'images/1.png',
    },

    {
        name: '2',
        img: 'images/2.png',
    },

    {
        name: '3',
        img: 'images/3.png',
    },

    {
        name: '4',
        img: 'images/4.png',
    },

    {
        name: '5',
        img: 'images/5.png',
    },
    
    {
        name: '6',
        img: 'images/6.png',
    },

    {
        name: '1',
        img: 'images/1.png',
    },

    {
        name: '2',
        img: 'images/2.png',
    },

    {
        name: '3',
        img: 'images/3.png',
    },

    {
        name: '4',
        img: 'images/4.png',
    },

    {
        name: '5',
        img: 'images/5.png',
    },
    
    {
        name: '6',
        img: 'images/6.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard (){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
   const cards = document.querySelectorAll('img')
   const optionOneId = cardsChosenIds[0]
   const optionTwoId = cardsChosenIds[1]

    console.log('Check for match')

    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')

    alert ('You clickt the same !')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found !')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again...')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'You found them all !'

    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
     setTimeout(checkMatch, 500)
 }
}