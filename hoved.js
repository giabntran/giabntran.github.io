// Henter elementene fra HTML fila
const nameInputEl = document.getElementById("inputName");
const nameButtonEl = document.getElementById("buttonName");
const nameOutputEl = document.getElementById("outputName");

// Legger til en event når man trykker på knappen:
nameButtonEl.addEventListener("click", CheckName);

// Lager funksjonen som kjøres av nameButtonEl
function CheckName(){
    navn = nameInputEl.value;
    output = navn;

    // Legger til vår output tekst i slutten av p-elementet vårt.
    nameOutputEl.innerHTML = "Hi, " + output + ". Click to start one of the games!";
}