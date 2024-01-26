let sunAndWater = 0;
let randomPeony = Math.floor((Math.random() * 2)) + 1;

// Henter elementene fra HTML fila
const sunAndWaterGiveEl = document.getElementById("giveSunAndWater");
const peonyOutputEl = document.getElementById("outputPeony");

// Legger til en event når man trykker på knappen:
sunAndWaterGiveEl.addEventListener("click", AddSunAndWater);

// Lager funksjonen som kjøres av waterGiveEl
function AddSunAndWater() {
    peoniesEl = document.getElementById("peonies");
    sunAndWater += 1;
    document.getElementById("showClicks").innerHTML = sunAndWater;

    // IF-STATEMENTS HER:
    if (sunAndWater < 10) {
        output = "lvl1";
        peonies.src = "peony0.png";
    }
    else if (sunAndWater < 20) {
        output = "lvl2";
        peonies.src = "peony10.png";
    }
    else if (sunAndWater < 30) {
        output = "lvl3";
        peonies.src = "peony20.png";
    }
    else if (sunAndWater = 30) {
        sunAndWater = 29;
        if (randomPeony == 1) {
            output = "lvl4.0"
            peonies.src = "peony40.png";
            peonyOutputEl.innerHTML = "Congratulations! You've planted a golden peony. Click to restart ↓";
        }
        else {
            output = "lvl4.1"
            peonies.src = "peony41.png";
            peonyOutputEl.innerHTML = "Congratulations! You've planted a rainbow peony. Click to restart ↓";
        }
    }
    //console.log(sunAndWater, output)
}
