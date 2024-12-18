document.getElementById("skjema").addEventListener("submit", fikseSkjema);

document.getElementById("svar").addEventListener("submit", fikseSkjema);

document.getElementById("svar").style.visibility = "hidden";

document.getElementById("knapp").event(fikseSkjema);

function fikseSkjema(event) {

    event.preventDefault();

    let alder = document.querySelector("#tekst").value;

    console.log("Alder: " + alder);

    document.getElementById("svar").style.visibility = "visible";

}

alert("Takk for svaret, her er hva loven sier");

let hovedTekst = document.getElementById("hoved");

if(alder < 17) {
    hovedTekst.print("Du kan kjøre bil.")
}