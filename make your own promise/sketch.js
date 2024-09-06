function setup() {
    noCanvas();
    delay(1000)
        .then(() => createP('hello'))
        .catch(error => console.error(error))
}

function delay(time) {
    return new Promise((response, reject) => {
        if (isNaN(time)) {
            reject(new Error('oops not a number'));
        }
        setTimeout(response, time);
    });
}