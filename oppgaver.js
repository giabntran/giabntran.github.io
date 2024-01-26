//oppgave a
let tall1 = 1
let tall2 = 2

console.log("tall1 er " + tall1 + " og tall2 er " + tall2);

function bytteTall() {
    let bytte = tall1;
    tall1 = tall2;
    tall2 = bytte;
}

bytteTall();

console.log("tall1 er " + tall1 + " og tall2 er " + tall2);


//oppgave b
function mellomTall(tallFørste, tallAndre, tallTredje) {
    return tallAndre < tallFørste && tallTredje > tallFørste;
}

console.log(mellomTall(5, 1, 10));

