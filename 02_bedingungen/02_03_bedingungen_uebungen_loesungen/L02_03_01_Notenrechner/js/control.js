// Programmiere ein Skript, das dir je nach Punktzahl (0-100) jeweils
// die entsprechende Note (3-6) in der Konsole ausgibt. Verwende für die
// Lösung dieser Aufgabe eine If / Else Bedingung.

// Variable Punktzahl definieren
let score = 65;

// Punktzahl absteigend prüfen und Resultat in der Konsole ausgeben
    if (score > 90) {

        console.log('Du hast eine ' + 6);

    } else if (score > 80) {

        console.log('Du hast eine ' + 5.5);

    } else if (score > 70) {

        console.log('Du hast eine ' + 5);

    } else if (score > 65) {

        console.log('Du hast eine ' + 4.5);

    } else if (score > 60) {

        console.log('Du hast eine ' + 4);

    } else {

        console.log('Du bist ungenügend!');
    }
