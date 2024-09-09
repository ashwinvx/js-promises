/* 
    Code to call Cards API to draw or shuffle cards from the same deck.
*/
const deckOfCardsAPI = 'https://deckofcardsapi.com/api/deck';

function setup() {
    noCanvas();
    let deckId = null;
    //Initial part to call API and draw cards from newly shuffled deck
    fetch(`${deckOfCardsAPI}/new/draw/`)
        .then(response => response.json())
        .then(json => {
            deckId = json.deck_id;
            console.log('deckId-->', deckId);
            console.log(`${json.cards[0].value} of ${json.cards[0].suit}`);
            createP(`${json.cards[0].value} of ${json.cards[0].suit}`);
            createImg(json.cards[0].images['png']);
            drawCard(deckId, 3);
            shuffleCards(deckId);
        })
        .catch(err => console.error(err));
}

function shuffleCards(deckId) {
    fetch(`${deckOfCardsAPI}/${deckId}/shuffle/?remaining=true`)
        .then(response => response.json())
        .then(json => console.log('cards shuffled'))
        .catch(err => console.error(err));
}

function drawCard(deckId, count = 1) {
    fetch(`${deckOfCardsAPI}/${deckId}/draw/?count=${count}`)
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.cards.length; i++) {
                console.log(`${json.cards[i].value} of ${json.cards[i].suit}`);
                createP(`${json.cards[i].value} of ${json.cards[i].suit}`);
                createImg(json.cards[i].images['png']);
            }
            console.log('cards remaining in the deck: ', json.remaining)
        })
        .catch(err => console.error(err));
}