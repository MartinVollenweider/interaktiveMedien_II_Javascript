// Variablen festlegen
let derName;
let dasPasswort;

derName = prompt ("Ihr Name:");
dasPasswort = prompt ("Ihr Passwort:");



window.addEventListener("load", function() {
  if (derName == 'Fritz' && dasPasswort == 1234){
      document.querySelector("#titel").textContent = "Herzlich willkommen " + derName;
  } else {
    document.querySelector("#titel").textContent = "Ihre Nutzerdaten sind nicht korrekt.";
  } 
});