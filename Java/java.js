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