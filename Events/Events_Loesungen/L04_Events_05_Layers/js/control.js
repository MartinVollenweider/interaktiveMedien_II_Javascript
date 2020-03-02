document.querySelector("#sectionWrapper").addEventListener("click", function(ereignis) {  
    console.log(ereignis);
    console.log("Gelickt auf " + ereignis.toElement.tagName + " mit id " + ereignis.toElement.id)
});