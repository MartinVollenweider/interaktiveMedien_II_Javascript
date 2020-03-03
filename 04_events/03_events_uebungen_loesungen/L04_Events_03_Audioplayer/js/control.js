  // neues Audioelement erstellen mit new Audio();
  let audio = new Audio();
  audio.setAttribute('src', 'https://admin.undicht.be/wp-content/uploads/2019/05/kater.mp3');

  // Audio Element in der Konsole ausgeben und untersuchen
  console.log(audio);

  // Speichere den Play Button in einer Variable
  var play = document.querySelector('#play');

  // Höre auf den Klick auf den Play Button
  play.addEventListener('click', function(){

    // Spiele das Audio ab
    audio.play();

  });

  // Speichere den Pause Button in einer Variable
  var pause = document.querySelector('#pause');

  // Höre auf den Klick auf den Pause Button
  pause.addEventListener('click', function(){

    // Pausiere das Audio
    audio.pause();

  });

  // Höre auf den Event "timeupdate", um jeweils die aktuelle Spielzeit anzuzeigen
  // https://www.w3schools.com/tags/av_event_timeupdate.asp
  audio.addEventListener("timeupdate", function() {

    // Speichere das Element Dauer in einer Variable
    let duration = document.querySelector('#duration');

    let seconds = audio.currentTime;

    // Mit Math.floor den Wert abrunden
    seconds = Math.floor(seconds);
    console.log(seconds);

    // Den Wert ins HTML schreiben
    duration.innerHTML = seconds + " Sec."
  });


