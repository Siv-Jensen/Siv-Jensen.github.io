// let listeNavn = ["pulings", "samleie", "koding", "piss"]

// for (let i = 0; i < listeNavn.length; i = i + 1) {
//     console.log(listeNavn[i])
// }

// let listeSpørsmål = ["kor e du?", "kor går du?"];
// let listeSvar = ["ved deg", "inn i deg", "ut"];

// for (let x = 0; x < listeSpørsmål.length; x++) {
//     console.log("Spørsmål: " + listeSpørsmål[x])
//     let svar = prompt("Spørsmål: " + listeSpørsmål[x]);

//     if (svar == listeSvar[x]) {
//         console.log("yuh");
//     }
//     else {
//         console.log("nah");
//         console.log("va egt enten '" + listeSvar[x] + "' eller '" + listeSvar[x + 1]+ "'");
//     }

//     console.log("Svar: Enten " + listeSvar[x] + " eller " + listeSvar[x + 1])
// }

let navn = document.getElementById("navn");
let passord = document.getElementById("passord");
let farge = document.getElementById("farge");

let knapp = document.getElementById("knapp");

knapp.addEventListener("click", send);

function send() {
    let navnet = navn.value;
    let passordet = passord.value;
    let fargen = farge.value;

    console.log("Navn: " + navnet);
    console.log("Passord: " + passordet);
    console.log("Valgt farge:" + fargen);

    document.getElementById(kroppenMin).stylesheet.color = (fargen);
}