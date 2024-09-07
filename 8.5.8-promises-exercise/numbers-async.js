/* 
    Code to call numbers API using async and await which gives some trivia about number
*/
const numbersAPI = 'http://numbersapi.com/';
const favNumber = 8;
const numberRange = `1..10,20`;

function setup() {
    noCanvas();
    let promises = [callNumbersAPI(favNumber), callNumbersAPI(favNumber), callNumbersAPI(favNumber), callNumbersAPI(favNumber), callNumbersAPI(numberRange)];
    Promise.all(promises)
        .then(results => {
            for (let i = 0; i < results.length; i++) {
                if (results[i].text) {
                    createP(results[i].text)
                } else {
                    for (const property in results[i]) {
                        createP(results[i][property]);
                    }
                }
            }
        })
        .catch(err => console.error(err));
}

async function callNumbersAPI(number) {
    const response = await fetch(numbersAPI + number + '?json');
    const json = await response.json();
    return json;
}