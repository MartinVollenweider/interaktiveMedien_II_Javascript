// Das DOM lesen

let club = document.getElementsByTagName("LI");

console.log(club);

let room = document.querySelector('.room');

console.log(room);

let stage = document.querySelector('#stage');

console.log(stage);


// ins DOM schreiben
let people = document.querySelector('#people');

let vladi = document.createElement("li");
vladi.innerHTML = 'Vladimir';
people.appendChild(vladi);
