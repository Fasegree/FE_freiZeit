products = [
    {
        id: 1,
        img: '',
        sale: '-30%',
        priceCard: 44.30,
        priceBar: 48.39,
        productName: 'Fish',
        description: 'lorem 453 hf dfdsf dfdf trvd cs vtrh vdc fhtf vcs',
        raiting: 3
    },

    {
        id: 2,
        img: '',
        sale: '-10%',
        priceCard: 54.30,
        priceBar: 78.39,
        productName: 'Mops',
        description: 'lorem sds1 hf dfdsf dfdf trvd cs vtrh vdc fhtf vcs',
        raiting: 1
    },

    {
        id: 3,
        img: '',
        sale: '-14%',
        priceCard: 44.30,
        priceBar: 88.39,
        productName: 'osnf',
        description: 'lorem 98 hf dfdsf dfdf trvd cs vtrh vdc fhtf vcs',
        raiting: 5
    },

    {
        id: 4,
        img: '',
        sale: '-17%',
        priceCard: 54.30,
        priceBar: 78.39,
        productName: 'Mops',
        description: 'lorem 65 hf dfdsf dfdf trvd cs vtrh vdc fhtf vcs',
        raiting: 1
    },

    {
        id: 5,
        img: '',
        sale: '-80%',
        priceCard: 34.30,
        priceBar: 28.39,
        productName: 'Glina',
        description: 'lorem 12 hf dfdsf dfdf trvd cs vtrh vdc fhtf vcs',
        raiting: 2
    },

    {
        id: 6,
        img: '',
        sale: '-90%',
        priceCard: 24.30,
        priceBar: 77.39,
        productName: 'Buinm',
        description: 'lorem 23 hf dfdsf dfdf trvd cs vtrh vdc fhtf vcs',
        raiting: 4
    },
]



/* favorit */
const card__favorit = document.querySelector('.card__favorit')

let favorit = false
function card__favoritF() {

}
card__favorit.addEventListener('click', () =>{
    !favorit ? card__favorit.style.color ='red' : card__favorit.style.color ='black'
    favorit=!favorit
    card__favorit.classList.toggle('red')
    console.log(favorit);
})

/* card */

// const productImg = document.querySelector('.')

/* card__stars */

const svg_star = document.querySelectorAll('.svg_star');

function star_gold(element) {
   return  element.classList.add('svg_gold')
}
svg_star.forEach((element, i) => {
    (i < products[0].raiting) ? star_gold(element) : svg_star
});


/*creat card */ 
/*found elements of card */ 
const cards = document.querySelector('.cards')


products.forEach(el =>{
    const card = document.createElement('div')
    const sale__count = document.createElement('div');       //('.sale__count')
    sale__count.classList.add('sale__count')
    const card__price_cards__font = document.createElement('div');       //('.card__price-cards__font')
    card__price_cards__font.classList.add('card__price-cards__font')
    const card__price_bar__font = document.createElement('div');       //('.card__price-bar__font')
    card__price_bar__font.classList.add('card__price-bar__font')
    const card__title = document.createElement('div');       //('.card__title')
    card__title.classList.add('card__title')
    const card__stars = document.createElement('div');       //('card__stars')
    card__stars.classList.add('card__stars')

el.id +=1

// cards.append(card_img,card__description);
// card_img.append(card__favorit, sale_count)
// card__description.append()



console.log(el.id)
})