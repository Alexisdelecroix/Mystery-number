let min = 1;
let max = 10;
let chance = 0;
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
        // while (chance <= 3) {
            console.log(chance);
            if (chance < 3) {
                // if (chance == 0) {
                   
                // } 
               setTimeout(() => {
                  if (number > numberaleatoire) {
                    resultat.innerHTML +=
                        // "<h2>" + essai + (essai > 1) ? "ème" : "er" + " essai</h2>" + number + "? ... c'est -";
                        ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai</h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p> `;

                } else if (number < numberaleatoire) {
                    resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                } essai </h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p>`;

                } else if (number == numberaleatoire) {
                    resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                } essai </h2> <h2> Gagner ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                document.querySelector("button").setAttribute("disabled", "disabled");
                } if ( number != numberaleatoire && chance === 3) {
                    resultat.innerHTML += `<div class="line"></div>  <h2> ${chance} ${chance > 1 ? "ème" : "er"
                } essai </h2> <h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                document.querySelector("button").setAttribute("disabled", "disabled");
                }
            } , 1000);
        }
        //  else {
        //     resultat.innerHTML += `<div class="line"></div>  <h2> ${chance} ${chance > 1 ? "ème" : "er"
        // } essai </h2> <h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
        // <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
        // }
            chance++;
    });
            
        // }


//     if (number > numberaleatoire) {
//         resultat.innerHTML +=

//             // "<h2>" + essai + (essai > 1) ? "ème" : "er" + " essai</h2>" + number + "? ... c'est -";
//             ` <div class="line"></div> <h2> ${chance} ${chance > 1 ? "ème" : "er"
//             } essai</h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p> `;

//     } else if (number < numberaleatoire) {
//         resultat.innerHTML += ` <div class="line"></div> <h2> ${chance} ${chance > 1 ? "ème" : "er"
//             } essai </h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p>`;

//     } else {
//         resultat.innerHTML += `<div class="line"></div>  <h2> Gagner ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>`;
//     }
// } else {
//     resultat.innerHTML += `<div class="line"></div>  <h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire}</h3>`;
// }


