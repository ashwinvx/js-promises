/* 
    Code to call Cards API and draw cards on click of a button.
*/
const deckOfCardsAPI = 'https://deckofcardsapi.com/api/deck';

function setup() {

    shuffleNewDeck()
        .then(deckId => {
            let btn = document.getElementById("GimmeCardButton");
            btn.addEventListener('click', () => drawCard(deckId));
        })
        .catch(err => console.error(err));
}

async function shuffleNewDeck() {
    const response = await fetch(`${deckOfCardsAPI}/new/shuffle/`);
    const json = await response.json();
    return json.deck_id;
}

async function drawCard(deckId) {
    const response = await fetch(`${deckOfCardsAPI}/${deckId}/draw/`);
    const json = await response.json();
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    console.log('angle-->', Math.random() * 10);
    if (json.cards.length > 0) {
        document.getElementById('card-area').innerHTML += '<img width="200" height="300" style="transform:translate(' + randomX + 'px, ' + randomY + 'px) rotate(' + angle + 'deg)" src= ' + json.cards[0].image + '>';
    } else {
        document.getElementById("GimmeCardButton").remove();
    }
    console.log('cards remaining in the deck: ', json.remaining)
}