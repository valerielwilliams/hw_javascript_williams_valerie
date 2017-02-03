function howdy() {
    return 'Valerie Williams says hi!';
}

console.log(howdy());
var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little number!');
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else {
        console.log('7, what a perfect choice!');
    }

};

numba('7');
numba('seventy');
numba('university');

function inception() {
    display(favMovie);
}

function display() {
    console.log(favMovie + ' is a fantastic movie.');
}

var favMovie = 'Star Wars';

inception(display, favMovie);
