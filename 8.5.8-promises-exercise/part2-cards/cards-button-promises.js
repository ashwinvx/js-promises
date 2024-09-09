/* 
    Code to call Cards API and draw cards on click of a button.
*/
const deckOfCardsAPI = 'https://deckofcardsapi.com/api/deck';

function setup() {
    let deckId = null;
    //Initial part to call API and draw cards from newly shuffled deck
    fetch(`${deckOfCardsAPI}/new/shuffle/`)
        .then(response => response.json())
        .then(json => {
            deckId = json.deck_id;
            console.log('deckId-->', deckId);
        })
        .catch(err => console.error(err));
    let btn = document.getElementById("GimmeCardButton");
    btn.addEventListener('click', () => drawCard(deckId));
}

function drawCard(deckId) {
    fetch(`${deckOfCardsAPI}/${deckId}/draw/`)
        .then(response => response.json())
        .then(json => {
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
        })
        .catch(err => console.error(err));
}