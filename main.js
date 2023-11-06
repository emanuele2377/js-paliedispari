const inserisciParola = prompt("Inserisci parola");  

let reversed = "";

for (let i =  inserisciParola.length -1; i >= 0; i--) {
  reversed += inserisciParola[i];
  
}
let i =  inserisciParola.length
  if ( inserisciParola == reversed) {
    
    console.log("palindromo");
  }
   else {
    console.log("non palindromo")
   }
    
     