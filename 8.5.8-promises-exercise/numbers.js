/* 
    Code to call numbers API using promises which gives some trivia about number
*/
const numbersAPI = 'http://numbersapi.com/';
const favNumber = 7;
const numberRange = `1..10,20`;

function setup() {
    noCanvas();
    let count = 1;
    while (count < 5) {
        callNumbersAPI(favNumber);
        count++;
    }
    callNumbersAPI(numberRange);
}

function callNumbersAPI(number) {
    fetch(numbersAPI + number + '?json')
        .then(response => response.json())
        .then(json => {
            if (isNaN(number)) {
                for (const property in json) {
                    createP(json[property]);
                }
            } else {
                createP(json.text)
            }
        })
        .catch(err => console.error(err));
}
