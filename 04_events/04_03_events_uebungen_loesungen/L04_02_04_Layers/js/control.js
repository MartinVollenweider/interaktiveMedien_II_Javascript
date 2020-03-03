document.querySelector("#sectionWrapper").addEventListener("click", function(ereignis) {
    console.log(ereignis);
    console.log("Gelickt auf " + ereignis.target.tagName + " mit id " + ereignis.target.id)
});
