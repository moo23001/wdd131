const year = document.querySelector("#currentyear");

const today = new Date();

year.innerText = today.getFullYear();
let oLastModif = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = `Last modfied on: ${oLastModif}`;