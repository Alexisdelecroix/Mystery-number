function refresh() {
  location.reload();
}

// Récupération des boutons
let btnEasy = document.getElementById("easy");
let btnMedium = document.getElementById("medium");
let btnHard = document.getElementById("hard");

// Récupération des sessions
let easySess = document.getElementById("facile");
let mediumSess = document.getElementById("moyen");
let hardSess = document.getElementById("difficile");


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

function myFunction(event, max, chance1, chance2, lvl, result, nombre) {
  easySess.classList.remove("active");
  mediumSess.classList.remove("active");
  hardSess.classList.remove("active");

  if (event.target.id === "easy") {
    easySess.classList.add("active");
  } else if (event.target.id === "medium") {
    mediumSess.classList.add("active");
  } else if (event.target.id === "hard") {
    hardSess.classList.add("active");
  }

  let min = 1;
  // let max = 10;
  let chance = 1;
  let numberaleatoire = Math.floor(Math.random() * (max - min) + min);
  console.log(numberaleatoire);

  document
    .getElementById(lvl)
    .addEventListener("click", function (event) {
      event.preventDefault();
      const number = document.getElementById(nombre).value;
      let resultat = document.getElementById(result);
      console.log(number);
      console.log(chance);
      if (chance < chance1) {
        setTimeout(() => {

          if (number > numberaleatoire) {
            resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
              } essai</h2>  `;
              setTimeout(() => {
                resultat.innerHTML += `<p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"
              } </p>`
              }, 700);
             
            if (chance == chance2) {
              resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
            }
          } else if (number < numberaleatoire) {
            resultat.innerHTML += ` <div class="line"></div> <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
              } essai </h2> `;
              setTimeout(() => {
                resultat.innerHTML += `<p> ${number} ? ... c'est ${number > numberaleatoire ? "➖" : "➕"
              } </p>`
              }, 700);
             
            if (chance == chance2) {
              resultat.innerHTML += `<h2> Perdu ! 🥹 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3>
                    <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
            }
          } 
          else if (number == numberaleatoire) {
            resultat.innerHTML += `<div class="line"></div>  <h2> ${chance}${chance > 1 ? "<sup>ème</sup>" : "<sup>er</sup>"
              } essai </h2> <h2> Gagner ! 😃 </h2>  <h3> numéro mystère : ${numberaleatoire} </h3> 
                 <button type="button" class="btn btn-primary" onclick="refresh()">rejouer</button>`;
            //         document.querySelector("button").setAttribute("disabled", "disabled");
          }
          chance++;
        }, 400);
      }
    });
}
