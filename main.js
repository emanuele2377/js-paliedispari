const listaParole = ["anna", "ada", "aia", "dvd"];

const inserisciParola = prompt("Inserisci parola");

let autorizzato = false;

// alternativa al ciclo for
// autorizzato = listaUtenti.includes(mailUtente);

for (let i = 0; i < listaParole.length; i++) {
    
    const element = listaParole[i];

    // console.log( element, i );
    
    if(element == inserisciParola) {
        autorizzato = true;
        break;
    }
    
    // console.log(autorizzato, i);
}

let parola = "";
for (let i = 0; i < inserisciParola.length; i++) {
    const carattere = inserisciParola[i];

    if(carattere=="@") {
        break;
    }
    parola += carattere;
}

//Alternativa con indexOf e substring
// const posizioneChiocciola = mailUtente.indexOf("@");
// nomeUtente = mailUtente.substring(0, posizioneChiocciola);

if(autorizzato) {
    alert("e palindroma, " + inserisciParola);
} else {
    alert("Non e palindroma");
}