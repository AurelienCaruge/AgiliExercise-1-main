/**
 * Rédige ton code JavaScript en dessous
 * et n'oublie pas de lier ta feuille JavaScript avec ta feuille HTML
**/

// Commence par déclarer les variabls necessaires



// Rédige les conditions ou fonctions juste ici, n'oublie pas le résultat attendu dans le README.md


const button = document.querySelector('.sidebar_menu')
const side = document.querySelector('.sidebar')
const neve = document.querySelector('.nev')

button.addEventListener("click", sidebar_menu)

function sidebar_menu() {
    side.classList.toggle('active')
    neve.classList.toggle('active')
}


