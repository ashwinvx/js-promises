/* 
    Code to call Cards API to draw or shuffle cards from the same deck.
*/
const deckOfCardsAPI = 'https://deckofcardsapi.com/api/deck';

function setup() {
    noCanvas();

    drawCard()
        .then(deckId => {
            console.log('deckId-->', deckId);
            shuffleCards(deckId);
            drawCard(deckId, 2);
        })
        .catch(err => console.error(err));
}

async function shuffleCards(deckId) {
    const response = await fetch(`${deckOfCardsAPI}/${deckId}/shuffle/?remaining=true`);
    const json = await response.json();
    console.log('cards shuffled');
}

async function drawCard(deckId = 'new', count = 1) {
    const response = await fetch(`${deckOfCardsAPI}/${deckId}/draw/?count=${count}`);
    const json = await response.json();
    for (let i = 0; i < json.cards.length; i++) {
        console.log(`${json.cards[i].value} of ${json.cards[i].suit}`);
        createP(`${json.cards[i].value} of ${json.cards[i].suit}`);
        createImg(json.cards[i].images['png']);
    }
    console.log('cards remaining in the deck: ', json.remaining)
    return json.deck_id;
}