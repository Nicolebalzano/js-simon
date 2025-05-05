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
let correctNumbers = [];

let userNumber = [];
// funzione che genera numeri random
function randomNumber (count, max, min) {
    
       for (let i = 0; i < count; i++){
              let random = (Math.floor(Math.random() * (max - min + 1) + min));
              numbers.push(random);
       }
       return numbers;
}
const numsRandom = randomNumber(count, max, min);
console.log(numsRandom);

// prelevo elementi
    const numElem = document.querySelector("h2");
  numElem.innerHTML += numsRandom.join( " " );
 const firstSection = document.getElementById("first-section");
  const userTurn = document.getElementById("user-turn");
const spanElem = document.querySelector(".count-down");
const resultElem = document.querySelector("h3");
const numberInput = document.querySelectorAll("#form input");



//   timer si attiva da qui
const timeOut = setTimeout(function(){
firstSection.style.display = "none";
userTurn.classList = "block";
}, 3000);

// preleva elem
const formElem = document.getElementById("form");
const inputValue = document.querySelectorAll("input");
const buttonElem = document.querySelector(".btn");

formElem.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event){
       event.preventDefault();
       for(let i = 0; i < numberInput.length; i++) {
              const value = parseInt(numberInput[i].value);
              if(!userNumber.includes(value)){
                     userNumber.push(value);
              }
       }
       for (let i = 0; i < userNumber.length; i++){
              const curNumber = userNumber[i];
              if (numbers.includes(curNumber)){
                     correctNumbers.push(curNumber);
              }
       }
       resultElem.innerHTML = `Hai indovinato ${correctNumbers.length} numeri`;
       resultElem.classList.remove("d-none");
}









    

     
