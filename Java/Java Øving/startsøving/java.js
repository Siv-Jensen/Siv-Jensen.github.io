// alert("God dag");

// console.log("nah");

// let navn = prompt("Hva heter du?")
// console.log(navn);

// alert("Hei, " + navn);

// let aarstall = prompt("I hvilket år ble du født?")
// console.log(aarstall);

// let dato = new Date()
// console.log(dato.getFullYear());

// let alder = dato.getFullYear() - aarstall
// console.log(alder);

// document.getElementById("utskrift").innerText="Hei, " + navn + ". Du er " + alder + 5 + " år gammel.";

// if(alder > 17){
//     document.getElementById("utskrift2").innerText="Det vil si at du er gammel og grå."
// }
// else if(alder = 17){
//     document.getElementById("utskrift2").innerText="Det vil si du er nyfødt."
// }
// else{
//     document.getElementById("utskrift2").innerText="Det vil si du er nyfødt."
// }
// let bakgrunnsfarger = prompt("Velg to farger, separert med komma.")
//     document.querySelector("body").style.backgroundColor = "linear-gradient("+ bakgrunnsfarger +")";

// let bakgrunnsfarge = prompt("Gjett riktig farge.")
// console.log(bakgrunnsfarge);

// if(bakgrunnsfarge = (0,0,255)){
//     document.body.backroundColor = green
// }

// else{
//     document.body.backgroundColor = red
// };

let listeNavn = ["pulings", "samleie", "koding", "piss"]

for (let i = 0; i < listeNavn.length; i = i + 1) {
    console.log(listeNavn[i])
}

let listeSpørsmål = ["kor e du?", "kor går du?"];
let listeSvar = ["ved deg", "inn i deg", "ut"];

for (let x = 0; x < listeSpørsmål.length; x++) {
    console.log("Spørsmål: " + listeSpørsmål[x])
    let svar = prompt("Spørsmål: " + listeSpørsmål[x]);

    if (svar == listeSvar[x]) {
        console.log("yuh");
    }
    else {
        console.log("nah");
        console.log("va egt enten '" + listeSvar[x] + "' eller '" + listeSvar[x + 1]+ "'");
    }

    console.log("Svar: Enten " + listeSvar[x] + " eller " + listeSvar[x + 1])
}