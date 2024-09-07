/* 
    Code to call numbers API which gives some trivia about number
*/
const numbersAPI = 'http://numbersapi.com/';
const favNumber = 7;

function setup() {
    noCanvas();
    let count = 1;
    while (count < 5) {
        callNumbersAPI(favNumber);
        count++;
    }
    callNumbersAPIwithRange('1..10', 20);
}

function callNumbersAPI(number) {
    fetch(numbersAPI + number + '?json')
        .then(response => response.json())
        .then(json => createP(json.text))
        .catch(err => console.error(err));
}

function callNumbersAPIwithRange(min, max) {
    fetch(numbersAPI + min + ',' + max + '?json')
        .then(response => response.json())
        .then(json => {
            console.log('json-->', json);
            for (const property in json) {
                createP(json[property]);
            }
        })
        .catch(err => console.error(err));
}