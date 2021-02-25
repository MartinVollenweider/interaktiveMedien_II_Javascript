// Taschenrechner

document.querySelector("#ausgabe").value = 0;

document.querySelector("#button0").addEventListener("mousedown", function (){
  zahlHinzu("0");
});
document.querySelector("#button1").addEventListener("mousedown", function (){
  zahlHinzu("1");
});
document.querySelector("#button2").addEventListener("mousedown", function (){
  zahlHinzu("2");
});
document.querySelector("#button3").addEventListener("mousedown", function (){
  zahlHinzu("3");
});
document.querySelector("#button4").addEventListener("mousedown", function (){
  zahlHinzu("4");
});
document.querySelector("#button5").addEventListener("mousedown", function (){
  zahlHinzu("5");
});
document.querySelector("#button6").addEventListener("mousedown", function (){
  zahlHinzu("6");
});
document.querySelector("#button7").addEventListener("mousedown", function (){
  zahlHinzu("7");
});
document.querySelector("#button8").addEventListener("mousedown", function (){
  zahlHinzu("8");
});
document.querySelector("#button9").addEventListener("mousedown", function (){
  zahlHinzu("9");
});

document.querySelector("#buttonPunkt").addEventListener("mousedown", function (){
  zahlHinzu(".");
});

document.querySelector("#buttonPlus").addEventListener("mousedown", function (){
  zahlHinzu("+");
});
document.querySelector("#buttonMinus").addEventListener("mousedown", function (){
  zahlHinzu("-");
});
document.querySelector("#buttonMal").addEventListener("mousedown", function (){
  zahlHinzu("*");
});
document.querySelector("#buttonDurch").addEventListener("mousedown", function (){
  zahlHinzu("/");
});

document.querySelector("#buttonGleich").addEventListener("mousedown", function (){
  document.querySelector("#ausgabe").value = eval(document.querySelector("#ausgabe").value);
});

function zahlHinzu (zahl){
  if (document.querySelector("#ausgabe").value == "0") {
    document.querySelector("#ausgabe").value = zahl;
  } else {
    document.querySelector("#ausgabe").value = document.querySelector("#ausgabe").value + zahl;
  }
}

document.querySelector("#buttonClear").addEventListener("mousedown", function (){
  document.querySelector("#ausgabe").value = 0;
});
