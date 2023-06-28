// Function pour rafraichir la page au bouton rejouer
function refresh() {
  location.reload();
}

// Récupération des boutons
let btnEasy = document.getElementById("easy");
let btnMedium = document.getElementById("medium");
let btnHard = document.getElementById("hard");

// Récupération des sessions à afficher
let easySess = document.getElementById("facile");
let mediumSess = document.getElementById("moyen");
let hardSess = document.getElementById("difficile");

// Function au click sur les boutons navigations
btnEasy.addEventListener("click", (event) => {
  setTimeout(() => {
    myFunction(event, 10, 4, 3, "lvlFacile", "resultat", "nombre");
  }, 300);
});

btnMedium.addEventListener("click", (event) => {
  setTimeout(() => {
    myFunction(event, 50, 3, 2, "lvlMedium", "resultat1", "nombre1");
  }, 300);

});
btnHard.addEventListener("click", (event) => {
  setTimeout(() => {
    myFunction(event, 100, 2, 1, "lvlHard", "resultat2", "nombre2");
  }, 300);
});

// Function qui possède en paramètre les valeurs a modifier en fonction de la session
function myFunction(event, max, chance1, chance2, lvl, result, nombre) {

  // Suppression de la classe Active
  easySess.classList.remove("active");
  mediumSess.classList.remove("active");
  hardSess.classList.remove("active");

  // Si id === easy alors on ajoute la classe active
  if (event.target.id === "easy") {
    easySess.classList.add("active");
    btnEasy.classList.add("disabled");
    btnMedium.classList.add("disabled");
    btnHard.classList.add("disabled");
    btnEasy.setAttribute("disabled", "disabled");
    btnMedium.setAttribute("disabled", "disabled");
    btnHard.setAttribute("disabled", "disabled");
  } else if (event.target.id === "medium") {
    mediumSess.classList.add("active");
    btnMedium.classList.add("disabled");
    btnHard.classList.add("disabled");
    btnEasy.classList.add("disabled");
    btnMedium.setAttribute("disabled", "disabled");
    btnEasy.setAttribute("disabled", "disabled");
    btnHard.setAttribute("disabled", "disabled");
  } else if (event.target.id === "hard") {
    hardSess.classList.add("active");
    btnEasy.classList.add("disabled");
    btnMedium.classList.add("disabled");
    btnHard.classList.add("disabled");
    btnHard.setAttribute("disabled", "disabled");
    btnMedium.setAttribute("disabled", "disabled");
    btnEasy.setAttribute("disabled", "disabled");
  }

// Initialisation des valeurs
  let min = 1;
  let chance = 1;
  let numberaleatoire = Math.floor(Math.random() * (max - min) + min);
  console.log(numberaleatoire);

document
    .getElementById(lvl)
    .addEventListener("click", function (event) {
      event.preventDefault();

      // Récupération de la valeur de l'utilisateur
      const number = document.getElementById(nombre).value;

      // Emplacement du résultat
      let resultat = document.getElementById(result);
      console.log(number);
      console.log(chance);

      let tester = document.getElementById(lvl);

      // Si chance est inférieur a chance1 alors le jeu commence
      if (chance < chance1) {
        tester.classList.add("disabled");
        tester.setAttribute("disabled", "disabled");
        // Si le nombre de l'utilisateur est supperieur au nombre Aléatoire alors c'est ➖
        setTimeout(() => {
         
          if (number > numberaleatoire) {
            resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
              } essai</h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"
              } </p> `;
            if (chance == chance2) {
              resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
            }
          } else if (number < numberaleatoire) {
            resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
              } essai </h2> <p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"
              } </p>`;
            if (chance == chance2) {
              resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
            }
          } else if (number == numberaleatoire) {
            resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
              } essai </h2> <h2> Gagné ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                 <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
            //         document.querySelector("button").setAttribute("disabled", "disabled");
          
          }
          chance++;
          tester.removeAttribute("disabled");
          tester.classList.remove("disabled");
          if (number == numberaleatoire) {
            tester.classList.add("disabled");
            tester.setAttribute("disabled", "disabled");
          }
        }, 300); 
      }
    });
}
