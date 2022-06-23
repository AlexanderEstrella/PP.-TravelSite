const places = [ "Maldives", "Spain", "Japan", "hongkong"];
const random = Math.floor(Math.random() * 20) + 1;


function randomPlace() {
    if (random <= 5 && random > 1){
        return places[0];
    } else if (random <= 10 && random > 5 ) {
        return places[1];
    } else if (random <= 15 && random >10) {
        return places[2];
    } else if (random <= 20 && random > 15) {
        return places[3];
    }
}

document.getElementById('button').addEventListener('click', function () {
   
    let textbox = document.getElementById('name');
   textbox.placeholder = randomPlace();
   
})
