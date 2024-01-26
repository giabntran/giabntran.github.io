let XP = 0;

// Henter elementene fra HTML fila
const xpGiveEl = document.getElementById("giveXP");
const pokemonOutputEl = document.getElementById("outputPokemon");

// Legger til en event når man trykker på knappen:
xpGiveEl.addEventListener("click", AddXP);

// Lager funksjonen som kjøres av waterGiveEl
function AddXP() {
    pokemonEl = document.getElementById("pokemon");
    document.getElementById("showClicks").innerHTML = "Level " + XP;

    // IF-STATEMENTS HER:
    if (XP < 21) {
        XP += 1;
        output = "oddish";
        pokemon.src = "oddish.png";
    }
    else if (XP = 21) {
        output = "gloom";
        pokemon.src = "gloom.png";
        pokemonOutputEl.innerHTML =''
        XP = 21;
    }
}

const leafGiveEl = document.getElementById("giveLeaf");
const sunGiveEl = document.getElementById("giveSun");

leafGiveEl.addEventListener("click", AddLeaf);
sunGiveEl.addEventListener("click", AddSun);

function AddLeaf() {
    if (XP == 21) {
        output = "vileplume"
        pokemon.src = "vileplume.png";
        pokemonOutputEl.innerHTML = "You got Vileplume. Click to restart ↓";
    }
    else {
        alert("You need Oddish at level 21!")
    }
}

function AddSun() {
    if (XP == 21){
        output = "bellossom"
        pokemon.src = "bellossom.png";
        pokemonOutputEl.innerHTML = "You got Bellossom. Click to restart ↓";
    }
    else {
        alert("You need Oddish at level 21!")
    }
}