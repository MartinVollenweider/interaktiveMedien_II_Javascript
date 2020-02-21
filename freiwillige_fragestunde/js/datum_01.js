let inhalt;
let heute;

document.addEventListener('DOMContentLoaded', function() {

  inhalt = document.querySelector("#titel");
  heute = new Date(); // aktuelles Datum und aktuelle Zeit
  console.log(heute.getHours());
  if (heute.getHours() <= 12) {
    inhalt.textContent = "Guten Vormittag";
    document.querySelector("body").style.background = "yellow";  
  } else if (heute.getHours() <= 16) {
    inhalt.textContent = "Guten Nachmittag";
    document.querySelector("body").style.background = "red";
  } else {
    inhalt.textContent = "Guten Abend";
    document.querySelector("body").style.background = "black";
    document.querySelector("body").style.color = "white";
  }
});