let img_stein = document.getElementById("stein")
let img_saks = document.getElementById("saks")
let img_papir = document.getElementById("papir")

img_stein.addEventListener("click", klikkStein)

function klikkStein() {
    console.log("Du valgte stein!");
    alert("Fakk deg steinar");
}

img_saks.addEventListener("click", klikkSaks)

function klikkSaks() {
    console.log("Du valgte saks!");
    alert("du liker å se på to damer");
}

img_papir.addEventListener("click", klikkPapir)

function klikkPapir() {
    console.log("Du valgte papir!");
    alert("kjedelig vleg no annet");
}