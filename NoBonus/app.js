let min = 1;
let max = 10;
let chance = 1;
let numberaleatoire = Math.floor(Math.random() * (max - min) + min);

console.log(numberaleatoire);

function refresh() {
    location.reload();
}

document
    .getElementById("formulaire")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const number = document.getElementById("nombre").value;
        let resultat = document.getElementById("resultat");
        console.log(number);
        // console.log(chance);

        if (chance < 4) {
            setTimeout(() => {
                if (number > numberaleatoire) {

                    resultat.innerHTML +=
                        ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai</h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p> `;
                    if(chance == 3) {
                        resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                        <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                    }

                } else if (number < numberaleatoire) {

                    resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                    } essai </h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p>`;
                    if(chance == 3) {
                        resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                        <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                    }

                } else if (number == numberaleatoire) {

                    resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                    } essai </h2> <h2> Gagné ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                    document.querySelector("button").setAttribute("disabled", "disabled");

                }

                chance++;

            } , 1000);
        }
    });




