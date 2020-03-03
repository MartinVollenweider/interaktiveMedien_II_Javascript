
  // mit window.prompt die Variablen im Browser durch User-Input setzen
  let deinAlter = window.prompt("Gib dein Alter ein.");
  let maxAlter = window.prompt("Wie hoch schätzt du deine Lebenserwartung?");

  // Variablen definieren
  let einheit = "Tassen";
  let artikel = "Tee";
  let anzahlProTag = 2;

  // Totalverbrauch ausrechnen
  let totalGebraucht = (anzahlProTag * 365) * (maxAlter - deinAlter);


  // Code zum Erstellen neuer DOM Elemente hierhin

