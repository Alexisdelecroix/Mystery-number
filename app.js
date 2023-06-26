let min = 1;
let max = 10;
let chance = 0;
let numberaleatoire = Math.floor(Math.random() * ( max - min ) + min);
let essai = 1;

console.log(numberaleatoire);

document
    .getElementById("formulaire")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const number = document.getElementById("nombre").value;
        let resultat = document.getElementById("resultat");
        let resultat2 = document.getElementById("resultat2");
        let resultat3 = document.getElementById("resultat3");
        let resultat4 = document.getElementById("resultat4");
        console.log(number);

        if (number > numberaleatoire) {
            resultat.innerHTML =
                // "<h2>" + essai + (essai > 1) ? "ème" : "er" + " essai</h2>" + number + "? ... c'est -";
                `<h2> ${essai} ${essai > 1 ? "ème" : "er"
                } essai <br> ${number} ? ... c'est ➖</h2>`;
            chance++;
            essai++;
        } else if (number < numberaleatoire) {
            resultat2.innerHTML = `<h2> ${essai} ${essai > 1 ? "ème" : "er"
                } essai <br> ${number} ? ... c'est ➕</h2>`;
            chance++;
        } else if (number == numberaleatoire) {
            resultat3.innerHTML = "vous avez gagner 😃";
        }
        if (chance === 3) {
            resultat4.innerHTML = "vous avez perdu 🥹";
        }
    });
