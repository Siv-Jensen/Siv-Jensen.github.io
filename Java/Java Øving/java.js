alert("God dag");

console.log("nah");

let navn = prompt("Hva heter du?")
console.log(navn);

alert("Hei, " + navn);

let aarstall = prompt("I hvilket år ble du født?")
console.log(aarstall);

let dato = new Date()
console.log(dato.getFullYear());

let alder = dato.getFullYear() - aarstall
console.log(alder);

document.getElementById("utskrift").innerText="Hei, " + navn + ". Du er " + alder + 5 + " år gammel.";

if(alder > 17){
    document.getElementById("utskrift2").innerText="Det vil si at du er gammel og grå."
}
else if(alder = 17){
    document.getElementById("utskrift2").innerText="Det vil si du er nyfødt."
}
else{
    document.getElementById("utskrift2").innerText="Det vil si du er nyfødt."
}
let bakgrunnsfarger = prompt("Velg to farger, separert med komma.")
    document.querySelector("body").style.backgroundColor = "linear-gradient("+ bakgrunnsfarger +")";

// let bakgrunnsfarge = prompt("Gjett riktig farge.")
// console.log(bakgrunnsfarge);

// if(bakgrunnsfarge = (0,0,255)){
//     document.body.backroundColor = green
// }

// else{
//     document.body.backgroundColor = red
// };