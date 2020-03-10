// Array aller Bilder
  let images = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7'];
// Anzahl Bilder im Array
  console.log(images.length);
// Bilder anordnen durch Aufruf der Funktion anordnen()
  anordnen();

// Eventlistener: Klick auf den Button
  document.querySelector('#button').addEventListener("click", function(){
    // removeimages();  // bestehende Bilder entfer
    // Bilder anordnen durch Aufruf der Funktion anordnen()
    anordnen();
  });

  function anordnen(){
    for (var x = 0; x < images.length; x++) {
      let thisimage = document.createElement('img');
      thisimage.src = '../uebung/img/' + images[x] + '.jpg';
      thisimage.style.width = Math.random() * 200 + 'px';
      thisimage.style.left = Math.random() * 800 + 'px';
      thisimage.style.top = Math.random() * 600 + 'px';
      thisimage.style.transform = 'rotate(' + Math.random() * 360 +'deg)'
      document.querySelector('#content').appendChild(thisimage);
    };
  };

  function removeimages(){
    document.querySelector('.content').innerHTML = "";
  };
