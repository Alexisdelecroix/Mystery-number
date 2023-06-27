function refresh() {
    location.reload();
}

// Récupération des boutons 
let btnEasy = document.getElementById("easy")
let btnMedium = document.getElementById('medium');
let btnHard = document.getElementById('hard');

// Récupération des sessions
let easySess = document.getElementById("facile")
let mediumSess = document.getElementById('moyen');
let hardSess = document.getElementById('difficile');


btnEasy.addEventListener("click", myFunctionEasy);
function myFunctionEasy() {
    easySess.classList.toggle("active")
    mediumSess.classList.remove("active")
    hardSess.classList.remove("active")
    let min = 1;
    let max = 10;
    let chance = 1;
    let numberaleatoire = Math.floor(Math.random() * (max - min) + min);
    console.log(numberaleatoire);


    document
        .getElementById("lvlFacile")
        .addEventListener("click", function (event) {
            event.preventDefault();
            const number = document.getElementById("nombre").value;
            let resultat = document.getElementById("resultat");
            console.log(chance);
            if (chance < 4) {
                setTimeout(() => {
                    if (number > numberaleatoire) {

                        resultat.innerHTML +=
                            ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                            } essai</h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p> `;
                        if (chance == 3) {
                            resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                        }

                    } else if (number < numberaleatoire) {

                        resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                            } essai </h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"} </p>`;
                        if (chance == 3) {
                            resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                        }

                    } else if (number == numberaleatoire) {

                        resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                            } essai </h2> <h2> Gagner ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
                        document.querySelector("button").setAttribute("disabled", "disabled");
                    }
                    chance++;
                }, 1000);
            }
        });
}

btnMedium.addEventListener("click", myFunctionMedium);
function myFunctionMedium(event) {
    event.preventDefault;
    mediumSess.classList.toggle("active")
    easySess.classList.remove("active")
    hardSess.classList.remove("active")
    let min = 1;
    let max = 50;
    let chance = 1;
    let numberaleatoire;
    numberaleatoire = Math.floor(Math.random() * (max - min) + min);
    console.log(numberaleatoire)


    document.getElementById('lvlMedium').addEventListener("click", function (event) {
        event.preventDefault;
        let number2 = document.getElementById("nombre2").value;
        let resultat = document.getElementById("resultat1");
        console.log(number2);
        if (chance < 3) {
            console.log("coucou");
            setTimeout(() => {
                if (number2 > numberaleatoire) {

                    resultat.innerHTML +=
                        ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai</h2> <p> ${number2} ? ... c'est ${number2 > numberaleatoire ? "➖" : "➕"} </p> `;
                    if (chance == 2) {
                        resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                            <button type="button" class="btn" onclick="refresh()">rejouer</button>`;
                    }
                } else if (number2 < numberaleatoire) {

                    resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai </h2> <p> ${number2} ? ... c'est ${number2 > numberaleatoire ? "➖" : "➕"} </p>`;
                    if (chance == 2) {
                        resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                            <button type="button" class="btn" onclick="refresh()">rejouer</button>`;
                    }
                } else if (number2 == numberaleatoire) {

                    resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai </h2> <h2> Gagner ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                        <button type="button" class="btn" onclick="refresh()">rejouer</button>`;
                    document.querySelector("button").setAttribute("disabled", "disabled");
                }
                chance++;
            }, 1000);
        }
    });
}


btnHard.addEventListener("click", myFunctionHard);
function myFunctionHard() {
    hardSess.classList.toggle("active")
    easySess.classList.remove("active")
    mediumSess.classList.remove("active")
    let min = 1;
    let max = 100;
    let chance = 1;
    let numberaleatoire = Math.floor(Math.random() * (max - min) + min);
    console.log(numberaleatoire);


    document.getElementById('lvlHard').addEventListener("click", function (event) {
        event.preventDefault();
        const number3 = document.getElementById("nombre3").value;
        let resultat = document.getElementById("resultat2");
        console.log(number3);
        if (chance < 2) {
            setTimeout(() => {
                if (number3 > numberaleatoire) {
    
                    resultat.innerHTML +=
                        ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai</h2> <p> ${number3} ? ... c'est ${number3 > numberaleatoire ? "➖" : "➕"} </p> `;
                    if (chance == 1) {
                        resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                            <button type="button" class="btn" onclick="refresh()">rejouer</button>`;
                    }
                } else if (number3 < numberaleatoire) {
    
                    resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai </h2> <p> ${number3} ? ... c'est ${number3 > numberaleatoire ? "➖" : "➕"} </p>`;
                    if (chance == 1) {
                        resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                            <button type="button" class="btn" onclick="refresh()">rejouer</button>`;
                    }
                } else if (number3 == numberaleatoire) {
    
                    resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
                        } essai </h2> <h2> Gagner ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                        <button type="button" class="btn" onclick="refresh()">rejouer</button>`;
                    document.querySelector("button").setAttribute("disabled", "disabled");
                }
                chance++;
            }, 1000);
        }
    }
)};


