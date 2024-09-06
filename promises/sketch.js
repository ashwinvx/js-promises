const wordnikAPI =
    'https://api.wordnik.com/v4/words.json/randomWord?&minLength=3&maxLength=10&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
const giphyAPI =
    'https://api.giphy.com/v1/gifs/search?api_key=HvAxyR0YFMM3J2y9csC73CYtdiYPOTF6&limit=25&offset=0&rating=PG&lang=en&bundle=messaging_non_clips&q=';

function setup() {
    noCanvas();
    fetch(wordnikAPI)
        .then(response => response.json())
        .then(data => {
            createP(data.word);
            return fetch(giphyAPI + data.word);
        })
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.data.length; i++) {
                createP(data.data[i].title);
                createImg(data.data[i].images['original'].url);
            }
        })
        .catch(error => console.log('error-->', error));
}