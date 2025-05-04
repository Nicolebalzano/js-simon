// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente 
// deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare
//  sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// **BONUS:**
// - Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
/**
 * MILESTONE 0
 * 1) Creare l'interfaccia --> done
 * MILESTONE 1
 * 2) Generare i 5 numeri random --> done
 * 3) Stampare i 5 numeri in pagina --> done
 * 4) Far scomparire i numeri dopo 30 secondi e mostrare gli input --> done
 * MILESTONE 2
 * 5) Al click sul bottone leggere i numeri inseriti dall'utente --> done
 * 6) Controllare quanti dei numeri sono stati indovinati
 * 7) Stampare il risultato del punteggio
 */

let count = 5;
let min = 1;
let max = 100;
let numbers = [];
const startCountdownBtn = document.querySelector(".start-count-down");
startCountdownBtn.addEventListener("click", function() {
       function randomNumber (count, max, min) {
       for (let i = 0; i < count; i++){
              let random = (Math.floor(Math.random() * (max - min) + min));
              numbers.push(random);
       }
       return numbers;
}
const numsRandom = randomNumber(count, max, min);
console.log(numsRandom);

    const numElem = document.querySelector("h2");
  numElem.innerHTML += numsRandom;
 const firstSection = document.getElementById("first-section");
  const userTurn = document.getElementById("user-turn");
const spanElem = document.querySelector(".count-down");

let timer = 3;
//   timer si attiva da qui
const timeOut = setTimeout(function(){
firstSection.style.display = "none";
userTurn.classList = "block";
}, 3000);
})


// preleva elem
const formElem = document.getElementById("form");
const inputValue = document.querySelectorAll("input");
const buttonElem = document.querySelector(".btn");

// azione al click che salva i valori dell'utente in un array
buttonElem.addEventListener("click", function(){
       let values = [];
       inputValue.forEach(inputValue => {
              values.push(inputValue.value);
              console.log(values);
       });
   formElem.reset();
//    controllare che i numeri corrispondono



})









    

     
