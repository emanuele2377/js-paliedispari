const listaParole = ["anna", "ada", "aia", "dvd"];

const inserisciParola = prompt("Inserisci parola");

let autorizzato = false;


for (let i = 0; i < listaParole.length; i++) {

    const element = listaParole[i];

    if (element == inserisciParola) {
        autorizzato = true;
        break;
    }

}

let parola = "";
for (let i = 0; i < inserisciParola.length; i++) {
    const carattere = inserisciParola[i];

    if (carattere == "@") {
        break;
    }
    parola += carattere;
}

if (autorizzato) {
    alert("e palindroma, " + inserisciParola);
} else {
    alert("Non e palindroma");
}